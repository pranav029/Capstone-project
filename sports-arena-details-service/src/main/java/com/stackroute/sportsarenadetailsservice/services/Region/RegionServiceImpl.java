package com.stackroute.sportsarenadetailsservice.services.Region;

import com.stackroute.sportsarenadetailsservice.dto.request.ResponseDto;
import com.stackroute.sportsarenadetailsservice.entities.Region;
import com.stackroute.sportsarenadetailsservice.repositories.RegionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegionServiceImpl implements RegionService {

    @Autowired
    private RegionRepo regionRepo;

    @Override
    public ResponseDto<List<String>> getAllCountries() {
        List<Region> regions = regionRepo.findDistinctByCountryName();
        List<String> countries = regions.stream().map(Region::getId).toList();
        return new ResponseDto<>(true, null, countries, null);
    }

    @Override
    public ResponseDto<List<String>> getAllStates(String countryName) {
        List<Region> regions = regionRepo.findDistinctByCountryName(countryName);
        List<String> states = regions.stream().map(Region::getStateName).toList();
        states = states.stream().distinct().toList();
        return new ResponseDto<>(true, null, states, null);
    }

    @Override
    public ResponseDto<Region> addRegion(Region region) {
        Region savedRegion = regionRepo.save(region);
        return new ResponseDto<>(true, "Region added successfully", savedRegion, null);
    }

    @Override
    public ResponseDto<List<String>> getAllCities(String countryName, String stateName) {
        List<Region> regions = regionRepo.findByCountryNameAndStateName(countryName, stateName);
        List<String> cities = regions.stream().map(Region::getCityName).toList();
        return new ResponseDto<>(true, null, cities, null);
    }
}
