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
    private String groundId;
    private String slotId;
    private Date slotBookingDate;
    private BookingStatus bookingStatus;
    private String playerEmailId;
    private String ownerEmailId;
    private String startTime;
    private String endTime;
    private double pricePerHour;
}
