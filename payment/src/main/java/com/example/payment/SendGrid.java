package com.example.payment;

import com.sendgrid.*;
import java.io.IOException;

public class Payment    {
    public static void main(String[] args) throws IOException {
        try {
            SendGrid sg = new SendGrid(System.getenv("SENDGRID_API_KEY"));
            Request request = new Request();
            request.setMethod(Method.POST);
            request.setEndpoint("/api_keys");
            request.setBody(
                "{\"name\": \"My API Key\", \"scopes\": [\"mail.send\", \"alerts.create\", \"alerts.read\"]}");
            Response response = sg.api(request);
            System.out.println(response.getStatusCode());
            System.out.println(response.getBody());
            System.out.println(response.getHeaders());s
        } catch (IOException ex) {
            throw ex;
        }
    }
}