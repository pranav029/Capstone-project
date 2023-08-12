package com.stackroute.sportsarenadetailsservice.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Regions")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Region {
    @Id
    private String id;
    private String countryName;
    private String stateName;
    private String cityName;
}
