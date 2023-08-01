package com.stackroute.sportsarenadetailsservice.repositories;

import com.stackroute.sportsarenadetailsservice.entities.Ground;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GroundRepository extends MongoRepository<Ground, Integer> {
    Optional<Ground> findByGroundId(String groundId);
}
