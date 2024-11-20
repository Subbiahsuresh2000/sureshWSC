package com.example.payment;

import com.sendgrid.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.io.IOException;

@Service
public class EmailService {

    @Value("${sendgrid.api.key}") // Your SendGrid API Key
    private String sendGridApiKey;

    public void sendEmail(String to, String subject, String text) {
        try {
            // Initialize SendGrid client with the API key
            SendGrid sendGrid = new SendGrid(sendGridApiKey);

            // Create the email content (plain text)
            Email from = new Email("your-email@example.com"); // Replace with your sender email
            Email toEmail = new Email(to);
            Content content = new Content("text/plain", text);
            
            // Create a Mail object with from, subject, to, and content
            Mail mail = new Mail(from, subject, toEmail, content);

            // SendGrid request setup
            Request request = new Request();
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());

            // Send the email and get the response
            Response response = sendGrid.api(request);

            // Check response status and handle success/failure
            if (response.getStatusCode() == 202) {
                System.out.println("Email sent successfully.");
            } else {
                System.out.println("Failed to send email: " + response.getBody());
            }
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("Error occurred: " + e.getMessage());
        }
    }
}
