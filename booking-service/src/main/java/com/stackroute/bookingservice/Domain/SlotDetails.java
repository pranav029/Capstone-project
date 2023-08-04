package com.stackroute.bookingservice.Domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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
    private int groundId;
    private Date slotDate;
    private SlotStatus slotStatus;
    private int noOfPlayersAllowed;
    private Date startTime;
    private Date endingTime;
    private String groundCondition;
    private double hourlyPrice;


}

