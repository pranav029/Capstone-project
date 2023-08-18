package com.stackroute.sportsarenadetailsservice.services;

import com.stackroute.sportsarenadetailsservice.configs.RabbitConfig;
import com.stackroute.sportsarenadetailsservice.dto.EmailDto;
import com.stackroute.sportsarenadetailsservice.entities.Ground;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class NotificationService {
    private final static String ADD_SUBJECT = "Ground added in the arena";
    private final static String UPDATE_SUBJECT = "Ground updated in the arena";
    @Autowired
    private RabbitTemplate rabbitTemplate;

    public void sendUpdateNotification(Ground ground) {
        sendNotification(ground, UPDATE_SUBJECT);
    }

    public void sendAddNotification(Ground ground) {
        sendNotification(ground, ADD_SUBJECT);
    }

    private void sendNotification(Ground ground, String subject) {
        String body = prepareBody(ground, subject);
        EmailDto emailDto = prepareDto(ground.getOwnerEmail(), subject, body);
        rabbitTemplate.convertAndSend(RabbitConfig.EXCHANGE, RabbitConfig.ROUTING_KEY, emailDto);
    }

    private String prepareBody(Ground ground, String subject) {
        String body = "Ground with ID ";
        body += ground.getGroundId();
        body += " and Name ";
        body += ground.getGroundName();
        if (subject.equals(ADD_SUBJECT)) body += " added successfully";
        if (subject.equals(UPDATE_SUBJECT)) body += " updated successfully";
        return body;
    }

    private EmailDto prepareDto(String recipientEmail, String subject, String body) {
        EmailDto emailDto = new EmailDto();
        emailDto.setEmail(recipientEmail);
        emailDto.setSubject(subject);
        emailDto.setBody(body);
        return emailDto;
    }
}
