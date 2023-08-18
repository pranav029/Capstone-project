package com.stackroute.sportsarenadetailsservice.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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
    private String description;
    private double rating = 0.0;
    private Integer ratings = 0;
    private String groundImageUrl;
}
