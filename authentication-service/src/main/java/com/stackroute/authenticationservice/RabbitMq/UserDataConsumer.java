package com.stackroute.authenticationservice.RabbitMq;

import com.stackroute.authenticationservice.exception.AlreadyFoundException;
import com.stackroute.authenticationservice.model.User;
import com.stackroute.authenticationservice.service.UserService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDataConsumer {
    @Autowired
    private UserService userService;

    @RabbitListener(queues = "user_data_queue")
    public void consumeUserData(UserData userData) {
        try {

            System.out.println("Received user data: " + userData.toString());
            User user=new User(userData.getEmail(), userData.getPassword(), userData.getUserRole());
           userService.addUser(user);

        }  catch (AlreadyFoundException e) {
            throw new RuntimeException(e);
        }
    }
}
