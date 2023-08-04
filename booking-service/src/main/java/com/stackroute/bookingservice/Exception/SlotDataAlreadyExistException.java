package com.stackroute.bookingservice.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT, reason = "Number of players should be less then no of players allowed")
public class SlotDataAlreadyExistException extends Exception{
}
