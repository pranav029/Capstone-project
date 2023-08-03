package com.stackroute.bookingservice.Repository;

import com.stackroute.bookingservice.Domain.SlotDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface SlotDetailsRepository extends MongoRepository<SlotDetails, String> {
    SlotDetails findBySlotDateAndNoOfPlayersAllowedAndStartTimeAndEndingTime(Date slotDate,int noOfPlayersAllowed,Date startTime,Date endingTime);


}
