package com.stackroute.sportsarenadetailsservice.repositories;

import com.stackroute.sportsarenadetailsservice.entities.Region;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegionRepo extends MongoRepository<Region, String> {
    @Aggregation(pipeline = {"{'$group':{'_id':'$countryName'}}"})
    List<Region> findDistinctByCountryName();

    List<Region> findDistinctByCountryName(String countryName);

    List<Region> findByCountryNameAndStateName(String countryName, String stateName);
}
