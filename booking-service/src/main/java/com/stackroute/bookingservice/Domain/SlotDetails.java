package com.stackroute.bookingservice.Domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;
import java.util.UUID;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection="slots")
public class SlotDetails {
    @Id
    private String slotId = UUID.randomUUID().toString();
    private String groundId;
    private String slotDate;
    private SlotStatus slotStatus;
    private int noOfPlayersAllowed;
    private String startTime;
    private String endingTime;
    private String groundCondition;
    private double hourlyPrice;
}

