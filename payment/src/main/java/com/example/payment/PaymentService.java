package com.example.payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.paymentconfig.RazorpayConfig;
import com.razorpay.SignatureVerificationException;
import com.razorpay.utils.ClientUtils;

@Service
public class PaymentService {

    @Autowired
    private RazorpayConfig RazorpayConfig;
    @Autowired
    private EmailService emailService;
    @Autowired
    private smsService smsService;
    @Autowired
    private PaymentRepository paymentRepository;

    // Handle payment success, verify signature, and notify the client
    public void handlePaymentSuccess(Payment payment) {
        // Save the payment details to the database
        paymentRepository.save(payment);

        // Send payment success notifications
        sendPaymentNotification(payment);
    }

    // Send payment notification to the client via email and SMS
    private void sendPaymentNotification(Payment payment) {
        String message = "Your payment of ₹" + payment.getAmount() + " was successful. Razorpay Payment ID: " + payment.getRazorpayPaymentId();
        
        // Send SMS (use a real phone number)
        smsService.sendSms("client_phone_number", message);

        // Send Email (use a real email address)
        emailService.sendEmail("client_email", "Payment Successful", message);
    }

    // Verify Razorpay payment signature
    public boolean verifyPaymentSignature(String razorpayPaymentId, String razorpayOrderId, String razorpaySignature) {
        // Razorpay's signature verification method
        try {
            boolean isVerified = ClientUtils.verifyPaymentSignature(razorpayPaymentId, razorpayOrderId, razorpaySignature, razorpayConfig.getKeySecret());
            return isVerified;
        } catch (SignatureVerificationException e) {
            e.printStackTrace();
            return false;
        }
    }
}
