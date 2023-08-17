package com.stackroute.sportsarenadetailsservice.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressDto {
    @NotBlank(message = "Street name is required")
    private String streetName;
    @NotBlank(message = "City is required")
    private String city;
    private String state;
    private String country;
}
