package com.example.paymentconfig;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RazorpayConfig {

    private String keyId = "your_razorpay_key_id";
    private String keySecret = "your_razorpay_key_secret";

    @Bean
    public String getKeyId() {
        return keyId;
    }

    @Bean
    public String getKeySecret() {
        return keySecret;
    }
}
