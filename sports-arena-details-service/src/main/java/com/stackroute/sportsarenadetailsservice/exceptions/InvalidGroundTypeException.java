package com.stackroute.sportsarenadetailsservice.exceptions;

public class InvalidGroundTypeException extends RuntimeException {

    public InvalidGroundTypeException(String type) {
        super(String.format("Ground type %s is not valid", type));
    }
}
