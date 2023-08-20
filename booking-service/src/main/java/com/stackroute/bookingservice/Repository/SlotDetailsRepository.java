package com.stackroute.bookingservice.Repository;

import com.stackroute.bookingservice.Domain.SlotDetails;
import com.stackroute.bookingservice.Domain.SlotStatus;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.Optional;

@Repository
public interface SlotDetailsRepository extends MongoRepository<SlotDetails, String> {
    SlotDetails findBySlotDateAndStartTimeAndEndingTime(String slotDate,String startTime,String endingTime);
    SlotDetails findBySlotStatus(SlotStatus slotStatus);
    SlotDetails findByGroundIdAndSlotDate(String groundId, String slotDate);


}
