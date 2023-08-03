package com.stackroute.sportsarenadetailsservice.controller;

import com.stackroute.sportsarenadetailsservice.dto.request.GroundDto;
import com.stackroute.sportsarenadetailsservice.dto.request.ResponseDto;
import com.stackroute.sportsarenadetailsservice.services.ArenaDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/v1/arena/details")
public class ArenaDetailController {

    @Autowired
    private ArenaDetailService arenaDetailService;

    @PostMapping("/add")
    public ResponseEntity<ResponseDto<GroundDto>> addGround(@Valid @RequestBody GroundDto groundDto) {
        ResponseDto<GroundDto> dto = arenaDetailService.addGround(groundDto);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }


    @PutMapping("/update")
    public ResponseEntity<ResponseDto<GroundDto>> updateGround(@Valid @RequestBody GroundDto groundDto) {
        ResponseDto<GroundDto> dto = arenaDetailService.updateGround(groundDto);
        return ResponseEntity.ok(dto);
    }

    @DeleteMapping("/delete/{groundId}")
    public ResponseEntity<ResponseDto<Void>> deleteGround(String groundId) {
        ResponseDto<Void> dto = arenaDetailService.deleteGround(groundId);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/{groundId}")
    public ResponseEntity<ResponseDto<GroundDto>> getGroundById(@PathVariable String groundId) {
        ResponseDto<GroundDto> dto = arenaDetailService.getGroundById(groundId);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/type/{groundType}")
    public ResponseEntity<ResponseDto<List<GroundDto>>> getGroundByType(@PathVariable String groundType) {
        ResponseDto<List<GroundDto>> dto = arenaDetailService.getGroundsByType(groundType);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/owner/{ownerEmail}")
    public ResponseEntity<ResponseDto<List<GroundDto>>> updateGround(@PathVariable String ownerEmail) {
        ResponseDto<List<GroundDto>> dto = arenaDetailService.getAllGroundOfOwner(ownerEmail);
        return ResponseEntity.ok(dto);
    }

    @PostMapping("rating/update/{groundId}/{rating}")
    public ResponseEntity<ResponseDto<GroundDto>> updateRating(@PathVariable String groundId, @PathVariable Double rating) {
        ResponseDto<GroundDto> dto = arenaDetailService.updateGroundRating(groundId, rating);
        return ResponseEntity.ok(dto);
    }
}
