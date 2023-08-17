package com.stackroute.sportsarenadetailsservice.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GroundDto {
    private String groundId;
    @NotBlank(message = "Owner email cannot be blank")
    private String ownerEmail;
    @NotBlank(message = "Ground type is required")
    private String groundType;
    private String groundName;
    private AddressDto address;
    private SlotDto slot;
    private String amenities;
    private Double rating;
    private String groundImageUrl;
    private String description;
}
