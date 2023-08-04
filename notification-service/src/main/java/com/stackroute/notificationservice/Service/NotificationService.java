package com.stackroute.notificationservice.Service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {
    private final JavaMailSender mailSender;


    public NotificationService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }
    public void sendEmail(String recipientid, String senderid, String ownerId, String msgToRecipient, String msgToSender){
        SimpleMailMessage simpleMailMessage=new SimpleMailMessage();
        simpleMailMessage.setFrom("shashwat.swaraj14@gmail.com");
        simpleMailMessage.setBcc(senderid);
        simpleMailMessage.setTo(senderid);
        simpleMailMessage.setSubject(msgToRecipient);
        simpleMailMessage.setText(msgToSender);
        this.mailSender.send(simpleMailMessage);
    }
}
