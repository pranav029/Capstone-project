package com.stackroute.userservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT, reason = "Email,passoword and user role cannot be changed")
public class EmailPasswordUpdateException extends Exception {


}