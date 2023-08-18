package com.stackroute.authenticationservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT,reason = "trying to add same data")
public class AlreadyFoundException extends Exception{
}
