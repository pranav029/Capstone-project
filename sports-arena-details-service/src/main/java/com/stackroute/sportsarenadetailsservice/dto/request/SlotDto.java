package com.stackroute.sportsarenadetailsservice.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SlotDto {
    @NotBlank(message = "Opening time is required")
    private String openingTime;
    @NotBlank(message = "Closing time is required")
    private String closingTime;
}
