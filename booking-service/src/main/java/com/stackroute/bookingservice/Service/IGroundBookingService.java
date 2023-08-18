package com.stackroute.bookingservice.Service;

import com.stackroute.bookingservice.Domain.GroundBooking;
import com.stackroute.bookingservice.Domain.SlotDetails;
import com.stackroute.bookingservice.Domain.SlotStatus;
import com.stackroute.bookingservice.Exception.*;

import java.util.Date;
import java.util.List;

public interface IGroundBookingService {
    public GroundBooking saveGroundBooking(GroundBooking g,String slotId) throws BookingDataAlreadyExistException;
    public SlotDetails saveSlotDetails(SlotDetails s) throws SlotDataAlreadyExistException;
    public GroundBooking getGroundBooking(String bookingId) throws BookingIdNotFoundException;
    public List<GroundBooking> getBooking();
    public GroundBooking cancelGroundBooking(String bookingId) throws BookingIdNotFoundException;
    public List<GroundBooking> getGroundBookingByPlayerId(String playerEmailId) throws EmailIdNotFoundException;
    public List<GroundBooking> getGroundBookingByOwnerId(String ownerEmailId) throws EmailIdNotFoundException;
   public GroundBooking updateGroundBooking(GroundBooking g,String bookingId)throws BookingIdNotFoundException;
    public SlotDetails getSlotDetails(String bookingId) throws SlotNotFoundException;
    public SlotDetails getSlots(String groundId,Date slotDate) throws SlotNotFoundException;
    public SlotDetails getAvailableSlots(SlotStatus slotStatus) throws SlotNotFoundException;

//    public GroundBooking getGroundIdAndStatus(GroundBooking g,SlotStatus slotStatus);

}
