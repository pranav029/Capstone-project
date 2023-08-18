package com.stackroute.authenticationservice.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity(name = "user")
public class User {
    @Id
    private String email;
    private String password;
    public enum UserRole{
        OWNER,PLAYER
    }
    private UserRole userRole;

}
