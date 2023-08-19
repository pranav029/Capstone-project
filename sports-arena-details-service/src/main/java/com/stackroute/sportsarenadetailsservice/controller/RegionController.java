package com.stackroute.sportsarenadetailsservice.controller;

import com.stackroute.sportsarenadetailsservice.dto.request.ResponseDto;
import com.stackroute.sportsarenadetailsservice.entities.Region;
import com.stackroute.sportsarenadetailsservice.services.Region.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/region")
@CrossOrigin
public class RegionController {
    @Autowired
    private RegionService regionService;

    @PostMapping("/add")
    public ResponseEntity<ResponseDto<Region>> addRegion(@RequestBody Region region) {
        ResponseDto<Region> dto = regionService.addRegion(region);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @GetMapping("/country")
    public ResponseEntity<ResponseDto<List<String>>> getAllCountries() {
        ResponseDto<List<String>> dto = regionService.getAllCountries();
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/state/{countryName}")
    public ResponseEntity<ResponseDto<List<String>>> getAllStates(@PathVariable String countryName) {
        ResponseDto<List<String>> dto = regionService.getAllStates(countryName);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/city/{countryName}/{stateName}")
    public ResponseEntity<ResponseDto<List<String>>> getAllCities(
            @PathVariable String countryName,
            @PathVariable String stateName
    ) {
        ResponseDto<List<String>> dto = regionService.getAllCities(countryName, stateName);
        return ResponseEntity.ok(dto);
    }
}
