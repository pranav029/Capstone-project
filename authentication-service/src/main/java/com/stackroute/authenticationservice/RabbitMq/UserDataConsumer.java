package com.stackroute.authenticationservice.RabbitMq;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class UserDataConsumer {

    @RabbitListener(queues = "user_data_queue")
    public void consumeUserData(String userJson) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            UserData userData = objectMapper.readValue(userJson, UserData.class);


            System.out.println("Received user data: " + userData.toString());


            String userEmail = userData.getUserEmail();
            String password = userData.getPassword();
            String userRole = userData.getUserRole();



        } catch (IOException e) {

            e.printStackTrace();
        }
    }
}
