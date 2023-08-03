package com.stackroute.bookingservice.Service;

import com.stackroute.bookingservice.Domain.GroundBooking;
import com.stackroute.bookingservice.Domain.SlotDetails;
import com.stackroute.bookingservice.Exception.BookingDataAlreadyExistException;
import com.stackroute.bookingservice.Exception.BookingIdNotFoundException;
import com.stackroute.bookingservice.Exception.PlayerEmailIdNotFoundException;
import com.stackroute.bookingservice.Exception.SlotDataAlreadyExistException;

import java.util.List;
import java.util.Optional;

public interface IGroundBookingService {
    public GroundBooking saveGroundBooking(GroundBooking g,String s) throws BookingDataAlreadyExistException;
    public SlotDetails saveSlotDetails(SlotDetails s) throws SlotDataAlreadyExistException;
    public GroundBooking getGroundBooking(String bookingId) throws BookingIdNotFoundException;
    public GroundBooking cancelGroundBooking(String bookingId) throws BookingIdNotFoundException;
    
}
