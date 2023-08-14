package com.stackroute.bookingservice.Repository;

import com.stackroute.bookingservice.Domain.GroundBooking;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface GroundBookingRepository extends MongoRepository<GroundBooking, String> {

//    @Query("{playerEmailId:[?0]}")
    List<GroundBooking> findByPlayerEmailId(String playerEmailId);
//    @Query("{ownerEmailId:?0}")
    List<GroundBooking> findByOwnerEmailId(String ownerEmailId);

    List<GroundBooking> findBySlotId(String slotId);



}
