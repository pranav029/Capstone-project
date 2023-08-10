package com.stackroute.userservice.rabbitMq;


import com.stackroute.userservice.domain.UserRole;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserData {
    private String email;
    private String password;
    private UserRole userRole;


}
