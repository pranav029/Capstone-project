package com.stackroute.bookingservice.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT, reason = "with this slot id all bookings are done")
public class BookingDataAlreadyExistException extends Exception{
}
