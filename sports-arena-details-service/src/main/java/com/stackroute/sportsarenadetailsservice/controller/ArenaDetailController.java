package com.stackroute.sportsarenadetailsservice.controller;

import com.stackroute.sportsarenadetailsservice.dto.request.GroundDto;
import com.stackroute.sportsarenadetailsservice.dto.request.ResponseDto;
import com.stackroute.sportsarenadetailsservice.services.ArenaDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api/v1/arena/details")
public class ArenaDetailController {

    @Autowired
    private ArenaDetailService arenaDetailService;

    //add arena details
    @PostMapping("/add")
    public ResponseEntity<ResponseDto<GroundDto>> addGround(@Valid @RequestBody GroundDto groundDto) {
        ResponseDto<GroundDto> dto = arenaDetailService.addGround(groundDto);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    //update arena details
    @PutMapping("/update")
    public ResponseEntity<ResponseDto<GroundDto>> updateGround(@Valid @RequestBody GroundDto groundDto) {
        ResponseDto<GroundDto> dto = arenaDetailService.updateGround(groundDto);
        return ResponseEntity.ok(dto);
    }
}
