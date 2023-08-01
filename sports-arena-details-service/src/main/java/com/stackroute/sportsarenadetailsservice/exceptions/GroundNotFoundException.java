package com.stackroute.sportsarenadetailsservice.exceptions;

import com.stackroute.sportsarenadetailsservice.entities.Ground;

public class GroundNotFoundException extends RuntimeException {
    public GroundNotFoundException(String groundId) {
        super(String.format("Ground with id: %s not found", groundId));
    }

    public GroundNotFoundException() {
        super("Ground id is null");
    }
}
