package com.stackroute.sportsarenadetailsservice.services;

import com.stackroute.sportsarenadetailsservice.constants.GroundType;
import com.stackroute.sportsarenadetailsservice.dto.request.GroundDto;
import com.stackroute.sportsarenadetailsservice.dto.request.ResponseDto;
import com.stackroute.sportsarenadetailsservice.entities.Ground;
import com.stackroute.sportsarenadetailsservice.exceptions.GroundNotFoundException;
import com.stackroute.sportsarenadetailsservice.exceptions.InvalidGroundTypeException;
import com.stackroute.sportsarenadetailsservice.repositories.GroundRepository;
import com.stackroute.sportsarenadetailsservice.utilities.MapperUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArenaDetailServiceImpl implements ArenaDetailService {

    @Autowired
    private GroundRepository groundRepository;

    @Autowired
    private GroundHelper groundHelper;

    @Override
    public ResponseDto<GroundDto> addGround(GroundDto groundDto) {
        if (!GroundType.isValidType(groundDto.getGroundType()))
            throw new InvalidGroundTypeException(groundDto.getGroundType());
        Ground groundToSave = MapperUtil.groundDtoToGround(groundDto);
        Ground savedGround = groundRepository.save(groundToSave);
        return new ResponseDto<>(true, "Ground added successfully", MapperUtil.groundToGroundDto(savedGround), null);
    }

    @Override
    public ResponseDto<GroundDto> updateGround(GroundDto groundDto) {
        if (groundDto.getGroundId() == null)
            throw new GroundNotFoundException();
        Ground ground = groundRepository.findByGroundId(groundDto.getGroundId()).orElseThrow(() -> new GroundNotFoundException(groundDto.getGroundId()));
        if (!GroundType.isValidType(groundDto.getGroundType()))
            throw new InvalidGroundTypeException(groundDto.getGroundType());
        groundHelper.update(ground, groundDto);
        Ground updatedGround = groundRepository.save(ground);
        return new ResponseDto<>(true, "Ground updated successfully", MapperUtil.groundToGroundDto(updatedGround), null);
    }
}
