package com.stackroute.sportsarenadetailsservice.utilities;

import com.stackroute.sportsarenadetailsservice.dto.request.AddressDto;
import com.stackroute.sportsarenadetailsservice.dto.request.GroundDto;
import com.stackroute.sportsarenadetailsservice.dto.request.SlotDto;
import com.stackroute.sportsarenadetailsservice.entities.Ground;

public class MapperUtil {
    public static Ground groundDtoToGround(GroundDto groundDto) {
        Ground ground = new Ground();
        if (groundDto.getGroundId() != null) ground.setGroundId(groundDto.getGroundId());
        ground.setGroundName(groundDto.getGroundName());
        ground.setGroundType(groundDto.getGroundType());
        ground.setOwnerEmail(groundDto.getOwnerEmail());
        ground.setAmenities(groundDto.getAmenities());
        ground.setGroundImageUrl(groundDto.getGroundImageUrl());
        ground.setCity(groundDto.getAddress().getCity());
        ground.setStreetName(groundDto.getAddress().getStreetName());
        ground.setState(groundDto.getAddress().getState());
        ground.setCountry(groundDto.getAddress().getCountry());
        ground.setOpeningTime(groundDto.getSlot().getOpeningTime());
        ground.setClosingTime(groundDto.getSlot().getClosingTime());
        ground.setRating(groundDto.getRating());
        ground.setDescription(groundDto.getDescription());
        return ground;
    }

    public static GroundDto groundToGroundDto(Ground ground) {
        GroundDto groundDto = new GroundDto();
        AddressDto addressDto = new AddressDto();
        SlotDto slotDto = new SlotDto();
        slotDto.setClosingTime(ground.getClosingTime());
        slotDto.setOpeningTime(ground.getOpeningTime());
        addressDto.setCity(ground.getCity());
        addressDto.setStreetName(ground.getStreetName());
        addressDto.setState(ground.getState());
        addressDto.setCountry(ground.getCountry());
        groundDto.setGroundId(ground.getGroundId());
        groundDto.setGroundName(ground.getGroundName());
        groundDto.setGroundType(ground.getGroundType());
        groundDto.setOwnerEmail(ground.getOwnerEmail());
        groundDto.setAddress(addressDto);
        groundDto.setSlot(slotDto);
        groundDto.setAmenities(ground.getAmenities());
        groundDto.setRating(ground.getRating());
        groundDto.setGroundImageUrl(ground.getGroundImageUrl());
        groundDto.setDescription(ground.getDescription());
        return groundDto;
    }
}
