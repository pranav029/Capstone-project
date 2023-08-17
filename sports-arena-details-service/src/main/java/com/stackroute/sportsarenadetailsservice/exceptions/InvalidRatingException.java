package com.stackroute.sportsarenadetailsservice.exceptions;

public class InvalidRatingException extends RuntimeException {
    public InvalidRatingException(Double rating) {
        super(getMessage(rating));
    }
    private static String getMessage(Double rating){
        if (rating < 1) return "Rating cannot be less than 1";
        if (rating > 5) return "Rating cannot be greater than 5";
        return "";
    }
}
