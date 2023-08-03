package com.stackroute.bookingservice.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT, reason = "There is already one Booking available with this Booking Id")
public class BookingDataAlreadyExistException extends Exception{

}
