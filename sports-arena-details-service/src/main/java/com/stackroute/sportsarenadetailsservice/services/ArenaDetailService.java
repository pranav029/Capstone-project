package com.stackroute.sportsarenadetailsservice.services;

import com.stackroute.sportsarenadetailsservice.dto.request.GroundDto;
import com.stackroute.sportsarenadetailsservice.dto.request.ResponseDto;

import java.util.List;

public interface ArenaDetailService {
    ResponseDto<GroundDto> addGround(GroundDto groundDto);

    ResponseDto<GroundDto> updateGround(GroundDto groundDto);

    ResponseDto<GroundDto> getGroundById(String groundId);

    ResponseDto<List<GroundDto>> getGroundsByType(String groundType);

    ResponseDto<List<GroundDto>> getAllGroundOfOwner(String ownerEmail);

    ResponseDto<GroundDto> updateGroundRating(String groundId, Double rating);

    ResponseDto<Void> deleteGround(String groundId);
}
