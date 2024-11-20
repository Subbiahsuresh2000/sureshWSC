package com.example.payment;

import org.apache.logging.log4j.message.Message;
import org.springframework.stereotype.Service;

import com.twilio.Twilio;
import com.twilio.type.PhoneNumber;

@Service
public class smsService {

    static {
        Twilio.init("", "");
    }

    public void sendSms(String to, String messageContent) {
        Message message = Message.creator(
                new PhoneNumber(to),
                new PhoneNumber("7540073807"),
                messageContent)
            .create();
    }
}
