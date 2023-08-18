package com.stackroute.sportsarenadetailsservice.exceptions;

public class GroundNotFoundException extends RuntimeException {
    public GroundNotFoundException(String groundId) {
        super(String.format("Ground with id: %s not found", groundId));
    }

    public GroundNotFoundException() {
        super("Ground id is null");
    }
}
