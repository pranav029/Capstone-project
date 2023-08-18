package com.stackroute.userservice.rabbitMq;


import com.stackroute.userservice.Domain.UserRole;

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
