package com.stackroute.bookingservice.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.NOT_FOUND,reason = "There is no Booking available with this Booking Id")
public class BookingIdNotFoundException extends Exception{
    public BookingIdNotFoundException(String message) {
        super(message);
    }
}