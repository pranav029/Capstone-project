package com.stackroute.sportsarenadetailsservice.repository;

import com.stackroute.sportsarenadetailsservice.SportsArenaDetailsServiceApplication;
import com.stackroute.sportsarenadetailsservice.configs.ImageUploadConfig;
import com.stackroute.sportsarenadetailsservice.configs.RabbitConfig;
import com.stackroute.sportsarenadetailsservice.entities.Ground;
import com.stackroute.sportsarenadetailsservice.repositories.GroundRepository;
import com.stackroute.sportsarenadetailsservice.services.GroundHelper;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.AutoConfigureDataMongo;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@Import({ImageUploadConfig.class, RabbitConfig.class})
@ContextConfiguration(classes = {SportsArenaDetailsServiceApplication.class})
@TestPropertySource(value = "classpath:test.properties")
@AutoConfigureDataMongo
public class GroundRepoTest {
    @Autowired
    private GroundRepository groundRepository;
    private GroundHelper groundHelper;
    private Ground ground;

    @BeforeEach
    void setup() {
        ground = new Ground();
        ground.setOwnerEmail("pranavmani.naman@gmail.com");
        ground.setGroundType("TENNIS");
        ground.setGroundName("Big ground");
        ground.setStreetName("ABC street");
        ground.setCity("Bangalore");
        ground.setState("Karnataka");
        ground.setCountry("India");
        ground.setOpeningTime("11:00 AM");
        ground.setClosingTime("01:00 PM");
        ground.setAmenities("Big grounds with all the basic amenities");
        ground.setGroundImageUrl("dummy url");
        groundHelper = new GroundHelper();
    }

    @AfterEach
    void tearDown() {
        ground = null;
        groundHelper = null;
    }

    @Test
    @DisplayName("Test for add ground details")
    void addGround() {
        Ground ground1 = groundRepository.save(ground);
        assertNotNull(ground1);
        assertEquals(ground, ground1);
    }

    @Test
    @DisplayName("Test for updating ground details")
    void updateGroundDetails() {
        Ground ground1 = groundRepository.save(ground);
        String groundName = "Ground Name";
        ground1.setGroundName(groundName);
        Ground updatedGround = groundRepository.save(ground1);
        assertNotNull(updatedGround);
        assertEquals( groundName, updatedGround.getGroundName(),"Ground name should be same");
        assertEquals( ground1.getGroundId(), updatedGround.getGroundId(),"Ground id should be same");
        assertEquals(ground, ground1);
    }

    @Test
    @DisplayName("Test for get ground details by id")
    void getGroundById() {
        Ground ground1 = groundRepository.save(ground);
        Optional<Ground> ground2 = groundRepository.findByGroundId(ground1.getGroundId());
        assertNotNull(ground1);
        assertNotNull(ground2);
        assertTrue(ground2.isPresent());
        assertEquals(ground1.getGroundId(), ground2.get().getGroundId());
    }

    @Test
    @DisplayName("Test for to get ground details by type")
    void groundByType() {
        Optional<List<Ground>> ground1 = groundRepository.findAllByGroundType("TENNIS");
        assertTrue(ground1.isPresent());
        assertFalse(ground1.get().isEmpty());
        ground1.get().forEach(g -> assertEquals(g.getGroundType(), "TENNIS"));
    }

    @Test
    @DisplayName("Test for get all ground details of owner")
    void getAllGroundsOfOwner() {
        Optional<List<Ground>> ground1 = groundRepository.findAllByOwnerEmail("pranavmani.naman@gmail.com");
        assertTrue(ground1.isPresent());
        assertFalse(ground1.get().isEmpty());
        ground1.get().forEach(g -> assertEquals(g.getOwnerEmail(), "pranavmani.naman@gmail.com"));
    }

    @Test
    @DisplayName("Test for delete ground details")
    void deleteGround() {
        Ground ground1 = groundRepository.save(ground);
        groundRepository.delete(ground1);
        Optional<Ground> ground2 = groundRepository.findByGroundId(ground1.getGroundId());
        assertFalse(ground2.isPresent());
    }

    @Test
    @DisplayName("Test for update ground rating")
    void groundRating() {
        Ground ground1 = groundRepository.save(ground);
        groundHelper.updateRating(ground1, 5);
        Ground ground2 = groundRepository.save(ground1);
        assertEquals(ground2.getRating(), 5.0);
        assertEquals(ground2.getRatings(), 1);
    }
}
