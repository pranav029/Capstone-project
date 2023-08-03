package com.stackroute.userservice.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT, reason = "Trying to add same data")
public class AlreadyExistException extends Exception {

}