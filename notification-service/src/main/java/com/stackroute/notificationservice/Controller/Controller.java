package com.stackroute.notificationservice.Controller;

import com.stackroute.notificationservice.Domain.Notification;
import com.stackroute.notificationservice.Service.NotificationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    private final NotificationService notificationService;

    public Controller(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @PostMapping("/sendemail")
    public ResponseEntity sendEmail(@RequestBody Notification notification){
        this.notificationService.sendEmail(notification.getRecipientId(), notification.getSenderId(), notification.getOwnerID(), notification.getMsgToRecipient(), notification.getMsgToSender());
        return ResponseEntity.ok("success");
    }
}
