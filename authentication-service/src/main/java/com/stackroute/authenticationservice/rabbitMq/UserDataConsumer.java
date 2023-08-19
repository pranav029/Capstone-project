package com.stackroute.authenticationservice.rabbitMq;

import com.stackroute.authenticationservice.exception.AlreadyFoundException;
import com.stackroute.authenticationservice.model.User;
import com.stackroute.authenticationservice.service.UserService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDataConsumer {
    @Autowired
    private UserService userService;

    @Transactional
    @RabbitListener(queues = "user_data_queue")
    public void consumeUserData(UserData userData) throws AlreadyFoundException {
        System.out.println("Received user data: " + userData.toString());
        User user=new User(userData.getEmail(), userData.getPassword(), userData.getUserRole());
         try {
        userService.addUser(user);
      } catch (Exception e) {
                e.printStackTrace();
      }
    }
}
