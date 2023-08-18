package com.stackroute.sportsarenadetailsservice.services;

import com.stackroute.sportsarenadetailsservice.dto.request.GroundDto;
import com.stackroute.sportsarenadetailsservice.entities.Ground;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Component
public class GroundHelper {

    public void update(Ground ground, GroundDto groundDto) {
        ground.setGroundName(groundDto.getGroundName());
        ground.setGroundType(groundDto.getGroundType());
        ground.setAmenities(groundDto.getAmenities());
        ground.setGroundImageUrl(groundDto.getGroundImageUrl());
        ground.setCity(groundDto.getAddress().getCity());
        ground.setStreetName(groundDto.getAddress().getStreetName());
        ground.setState(groundDto.getAddress().getState());
        ground.setCountry(groundDto.getAddress().getCountry());
        ground.setOpeningTime(groundDto.getSlot().getOpeningTime());
        ground.setClosingTime(groundDto.getSlot().getClosingTime());
    }

    public void updateRating(Ground ground, double currentRating) {
        double previousTotal = ground.getRating() * (double) ground.getRatings();
        double newTotal = previousTotal + currentRating;
        double newRating = newTotal / (ground.getRatings() + 1);
        BigDecimal bigDecimal = new BigDecimal(newRating).setScale(2, RoundingMode.HALF_UP);
        ground.setRating(bigDecimal.doubleValue());
        ground.setRatings(ground.getRatings() + 1);
    }
}
