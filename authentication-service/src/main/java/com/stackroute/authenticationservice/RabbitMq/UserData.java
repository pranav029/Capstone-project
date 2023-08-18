package com.stackroute.authenticationservice.RabbitMq;

import com.stackroute.authenticationservice.model.User;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserData {
    private String email;
    private String password;

    private User.UserRole userRole;


}
