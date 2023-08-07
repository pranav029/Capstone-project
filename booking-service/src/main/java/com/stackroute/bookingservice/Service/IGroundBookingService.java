package com.stackroute.bookingservice.Service;

import com.stackroute.bookingservice.Domain.GroundBooking;
import com.stackroute.bookingservice.Domain.SlotDetails;
import com.stackroute.bookingservice.Domain.SlotStatus;
import com.stackroute.bookingservice.Exception.*;

import java.util.Date;

public interface IGroundBookingService {
    public GroundBooking saveGroundBooking(GroundBooking g,String slotId) throws BookingDataAlreadyExistException;
    public SlotDetails saveSlotDetails(SlotDetails s) throws SlotDataAlreadyExistException;
    public GroundBooking getGroundBooking(String bookingId) throws BookingIdNotFoundException;
    public GroundBooking cancelGroundBooking(String bookingId) throws BookingIdNotFoundException;
    public GroundBooking getGroundBookingByPlayerId(String playerEmailId) throws EmailIdNotFoundException;
    public GroundBooking getGroundBookingByOwnerId(String ownerEmailId) throws EmailIdNotFoundException;
   public GroundBooking updateGroundBooking(GroundBooking g,String bookingId)throws BookingIdNotFoundException;
    public SlotDetails getSlotDetails(String bookingId) throws SlotNotFoundException;
    public SlotDetails getSlots(Date slotDate) throws SlotNotFoundException;
    public SlotDetails getAvailableSlots(SlotStatus slotStatus) throws SlotNotFoundException;

}
