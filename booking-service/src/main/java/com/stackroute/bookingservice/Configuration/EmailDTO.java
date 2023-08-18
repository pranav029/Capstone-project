package com.stackroute.bookingservice.Configuration;

import com.stackroute.bookingservice.Domain.BookingStatus;
import lombok.*;
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class EmailDTO {
    private String email;
    private String subject;
    private String body;

}
