package com.stackroute.sportsarenadetailsservice.services;

import com.stackroute.sportsarenadetailsservice.constants.GroundType;
import com.stackroute.sportsarenadetailsservice.dto.request.GroundDto;
import com.stackroute.sportsarenadetailsservice.dto.request.ResponseDto;
import com.stackroute.sportsarenadetailsservice.entities.Ground;
import com.stackroute.sportsarenadetailsservice.exceptions.GroundNotFoundException;
import com.stackroute.sportsarenadetailsservice.exceptions.InvalidGroundTypeException;
import com.stackroute.sportsarenadetailsservice.exceptions.InvalidRatingException;
import com.stackroute.sportsarenadetailsservice.repositories.GroundRepository;
import com.stackroute.sportsarenadetailsservice.utilities.MapperUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    @Override
    public ResponseDto<GroundDto> getGroundById(String groundId) {
        Ground ground = groundRepository.findByGroundId(groundId).orElseThrow(() -> new GroundNotFoundException(groundId));
        return new ResponseDto<>(true, null, MapperUtil.groundToGroundDto(ground), null);
    }

    @Override
    public ResponseDto<List<GroundDto>> getGroundsByType(String groundType) {
        if (!GroundType.isValidType(groundType))
            throw new InvalidGroundTypeException(groundType);
        Optional<List<Ground>> grounds = groundRepository.findAllByGroundType(groundType);
        if (grounds.isEmpty())
            return new ResponseDto<>(true, "No ground is available with type " + groundType, null, null);
        return new ResponseDto<>(true, null, grounds.get().stream().map(MapperUtil::groundToGroundDto).toList(), null);
    }

    @Override
    public ResponseDto<List<GroundDto>> getAllGroundOfOwner(String ownerEmail) {
        Optional<List<Ground>> grounds = groundRepository.findAllByOwnerEmail(ownerEmail);
        if (grounds.isEmpty()) return new ResponseDto<>(true, "No records found with this email", null, null);
        return new ResponseDto<>(true, null, grounds.get().stream().map(MapperUtil::groundToGroundDto).toList(), null);
    }

    @Override
    public ResponseDto<GroundDto> updateGroundRating(String groundId, Double rating) {
        Ground ground = groundRepository.findByGroundId(groundId).orElseThrow(() -> new GroundNotFoundException(groundId));
        if (rating < 1 || rating > 5)
            throw new InvalidRatingException(rating);
        groundHelper.updateRating(ground, rating);
        groundRepository.save(ground);
        return new ResponseDto<>(true, null, MapperUtil.groundToGroundDto(ground), null);
    }

    @Override
    public ResponseDto<Void> deleteGround(String groundId) {
        Ground ground = groundRepository.findByGroundId(groundId).orElseThrow(() -> new GroundNotFoundException(groundId));
        groundRepository.delete(ground);
        return new ResponseDto<>(true, "Ground deleted successfully", null, null);
    }
}
