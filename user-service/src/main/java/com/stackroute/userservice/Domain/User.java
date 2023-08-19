package com.stackroute.userservice.Domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class User {
    @Id
    private String email;
    private String password;
    private String firstname;
    private String lastname;

    private UGender ugender;

    private String houseno;
    private String streetname;
    private String city;
    private String state;
    private String Country;
    private Long contactno;

    private String userRole;


}
