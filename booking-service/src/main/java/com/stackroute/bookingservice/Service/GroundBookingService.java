package com.stackroute.bookingservice.Service;

import com.stackroute.bookingservice.Domain.GroundBooking;
import com.stackroute.bookingservice.Domain.SlotDetails;
import com.stackroute.bookingservice.Domain.SlotStatus;
import com.stackroute.bookingservice.Exception.BookingDataAlreadyExistException;
import com.stackroute.bookingservice.Exception.BookingIdNotFoundException;
import com.stackroute.bookingservice.Exception.PlayerEmailIdNotFoundException;
import com.stackroute.bookingservice.Exception.SlotDataAlreadyExistException;
import com.stackroute.bookingservice.Repository.GroundBookingRepository;
import com.stackroute.bookingservice.Repository.SlotDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GroundBookingService implements IGroundBookingService {

    @Autowired
    private GroundBookingRepository groundBookingRepository;
    @Autowired
    private SlotDetailsRepository slotDetailsRepository;


    @Override
    public GroundBooking saveGroundBooking(GroundBooking g, String s) throws BookingDataAlreadyExistException {
        Optional<GroundBooking> g1 = groundBookingRepository.findById(g.getBookingId());
        Optional<SlotDetails> s1 = slotDetailsRepository.findById(s);
        SlotDetails s2 = s1.get();
        if (g.getNoOfPlayers() > s2.getNoOfPlayersAllowed()) {
            throw new BookingDataAlreadyExistException();
        }
        if (g1.isPresent()) {
            throw new BookingDataAlreadyExistException();
        }
        return groundBookingRepository.save(g);
    }

    @Override
    public SlotDetails saveSlotDetails(SlotDetails s) throws SlotDataAlreadyExistException {
        Optional<SlotDetails> s1 = Optional.ofNullable(slotDetailsRepository.findBySlotDateAndNoOfPlayersAllowedAndStartTimeAndEndingTime(s.getSlotDate(), s.getNoOfPlayersAllowed(), s.getStartTime(), s.getEndingTime()));
        if (s1.isPresent()) {
            throw new SlotDataAlreadyExistException();
        }
        s.setSlotStatus(SlotStatus.available);
        return slotDetailsRepository.save(s);
    }

    @Override
    public GroundBooking getGroundBooking(String bookingId) throws BookingIdNotFoundException{
        Optional<GroundBooking> g1= groundBookingRepository.findById(bookingId);
        if(g1.isEmpty())
        {
            throw new BookingIdNotFoundException("There is no booking available with this id");
        }
        return g1.get();
    }

     @Override
    public GroundBooking cancelGroundBooking(String bookingId) throws BookingIdNotFoundException{
        Optional<GroundBooking> existing=groundBookingRepository.findById(bookingId);
        if(existing.isEmpty())
        {
            throw new BookingIdNotFoundException(bookingId);
        }
        GroundBooking existingNormal=existing.get();
         GroundBooking g11=groundBookingRepository.save(existingNormal);
         return g11;
     }



}
