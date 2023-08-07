package com.stackroute.bookingservice.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT, reason = "There is already a slot available with this Information")
public class SlotDataAlreadyExistException extends Exception{
}
