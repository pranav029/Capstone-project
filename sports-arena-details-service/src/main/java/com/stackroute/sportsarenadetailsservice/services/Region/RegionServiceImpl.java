package com.stackroute.sportsarenadetailsservice.services.Region;

import com.stackroute.sportsarenadetailsservice.dto.request.ResponseDto;
import com.stackroute.sportsarenadetailsservice.entities.Region;
import com.stackroute.sportsarenadetailsservice.repositories.RegionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class RegionServiceImpl implements RegionService {

    @Autowired
    private RegionRepo regionRepo;

    @Override
    public ResponseDto<List<String>> getAllCountries() {
        List<Region> regions = regionRepo.findDistinctByCountryName();
        List<String> countries = new ArrayList<>();
        for (Region region : regions) {
            String id = region.getId();
            countries.add(id);
        }
        return new ResponseDto<>(true, null, countries, null);
    }

    @Override
    public ResponseDto<List<String>> getAllStates(String countryName) {
        List<Region> regions = regionRepo.findDistinctByCountryName(countryName);
        List<String> states = new ArrayList<>();
        for (Region region : regions) {
            String stateName = region.getStateName();
            states.add(stateName);
        }
        List<String> list = new ArrayList<>();
        Set<String> uniqueValues = new HashSet<>();
        for (String state : states) {
            if (uniqueValues.add(state)) {
                list.add(state);
            }
        }
        states = list;
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
        List<String> cities = new ArrayList<>();
        for (Region region : regions) {
            String cityName = region.getCityName();
            cities.add(cityName);
        }
        return new ResponseDto<>(true, null, cities, null);
    }
}
