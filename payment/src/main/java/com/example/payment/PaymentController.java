package com.example.payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    // Webhook to receive payment success notifications from Razorpay
    @PostMapping("/webhook")
    public String handlePaymentSuccess(@RequestBody RazorpayWebhookRequest webhookRequest) {
        // Extract relevant fields from the webhook request
        String razorpayPaymentId = webhookRequest.getPaymentId();
        String razorpayOrderId = webhookRequest.getOrderId();
        String razorpaySignature = webhookRequest.getSignature();

        // Verify payment signature
        boolean isSignatureValid = paymentService.verifyPaymentSignature(razorpayPaymentId, razorpayOrderId, razorpaySignature);

        if (isSignatureValid) {
            // Create Payment object and set status to SUCCESS
            Payment payment = new Payment(razorpayPaymentId, razorpayOrderId, razorpaySignature, webhookRequest.getAmount(), "SUCCESS");
            paymentService.handlePaymentSuccess(payment);
            return "Payment Successful";
        } else {
            // Handle failure (can log this or perform other actions)
            return "Payment Verification Failed";
        }
    }

    // Endpoint to create an order (for testing purposes)
    @PostMapping("/create-order")
    public Payment createOrder(@RequestBody Payment payment) {
        // For this example, we assume the order creation is successful
        payment.setRazorpayOrderId("order_123456");  // Simulated order ID
        payment.setStatus("PENDING");
        return PaymentRepository.save(payment);
    }
}
