package com.stackroute.sportsarenadetailsservice.services;

import com.stackroute.sportsarenadetailsservice.dto.request.GroundDto;
import com.stackroute.sportsarenadetailsservice.dto.request.ResponseDto;

public interface ArenaDetailService {
    ResponseDto<GroundDto> addGround(GroundDto groundDto);
    ResponseDto<GroundDto> updateGround(GroundDto groundDto);
}
