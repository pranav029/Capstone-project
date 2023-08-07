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
@Document(collection="booking")
public class GroundBooking {
    @Id
    private String bookingId = UUID.randomUUID().toString();
    private int groundId;
    private String slotId;
    private Date slotBookingDate;
    private BookingStatus bookingStatus;
    private String playerEmailId;
    private String ownerEmailId;
    private Date startTime;
    private Date endTime;
    private double pricePerHour;
}
