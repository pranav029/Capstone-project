package com.stackroute.sportsarenadetailsservice.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.annotation.Generated;

@Data
@Document
@AllArgsConstructor
@NoArgsConstructor
public class Ground {
    @Id
    private String groundId;
    private String ownerEmail;
    private String groundType;
    private String groundName;
    private String streetName;
    private String city;
    private String state;
    private String country;
    private String openingTime;
    private String closingTime;
    private String amenities;
    private Double rating;
    private String groundImageUrl;
}
