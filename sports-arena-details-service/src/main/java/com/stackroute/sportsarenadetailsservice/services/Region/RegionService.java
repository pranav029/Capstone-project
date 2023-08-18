package com.stackroute.sportsarenadetailsservice.services.Region;

import com.stackroute.sportsarenadetailsservice.dto.request.ResponseDto;
import com.stackroute.sportsarenadetailsservice.entities.Region;

import java.util.List;

public interface RegionService {
    ResponseDto<Region> addRegion(Region region);
    ResponseDto<List<String>> getAllCountries();

    ResponseDto<List<String>> getAllStates(String countryName);

    ResponseDto<List<String>> getAllCities(String countryName,String stateName);
}
