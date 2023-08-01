package com.stackroute.sportsarenadetailsservice.exceptions;

import com.stackroute.sportsarenadetailsservice.dto.request.ResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(GroundNotFoundException.class)
    public ResponseEntity<ResponseDto<Void>> handleGroundNotFound(GroundNotFoundException e) {
        return new ResponseEntity<>(new ResponseDto<>(false, null, null, e.getMessage()), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InvalidGroundTypeException.class)
    public ResponseEntity<ResponseDto<Void>> handleInvalidGroundTypeException(InvalidGroundTypeException e) {
        return new ResponseEntity<>(new ResponseDto<>(false, null, null, e.getMessage()), HttpStatus.BAD_REQUEST);
    }
}
