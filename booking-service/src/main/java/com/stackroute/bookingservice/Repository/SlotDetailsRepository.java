package com.stackroute.bookingservice.Repository;

import com.stackroute.bookingservice.Domain.SlotDetails;
import com.stackroute.bookingservice.Domain.SlotStatus;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;

@Repository
public interface SlotDetailsRepository extends MongoRepository<SlotDetails, String> {
    SlotDetails findBySlotDateAndStartTimeAndEndingTime(Date slotDate,Date startTime,Date endingTime);
    SlotDetails findBySlotDate(Date slotDate);

    SlotDetails findBySlotStatus(SlotStatus slotStatus);


}
