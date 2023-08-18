package com.stackroute.bookingservice.Service;

import com.stackroute.bookingservice.Configuration.BookingConfiguration;
import com.stackroute.bookingservice.Configuration.EmailDTO;
import com.stackroute.bookingservice.Domain.BookingStatus;
import com.stackroute.bookingservice.Domain.GroundBooking;
import com.stackroute.bookingservice.Domain.SlotDetails;
import com.stackroute.bookingservice.Domain.SlotStatus;
import com.stackroute.bookingservice.Exception.*;
import com.stackroute.bookingservice.Repository.GroundBookingRepository;
import com.stackroute.bookingservice.Repository.SlotDetailsRepository;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class GroundBookingService implements IGroundBookingService {

    @Autowired
    private GroundBookingRepository groundBookingRepository;
    @Autowired
    private SlotDetailsRepository slotDetailsRepository;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    SlotDetails slotDetails = new SlotDetails();
    GroundBooking booking=new GroundBooking();


    @Override
    public GroundBooking saveGroundBooking(GroundBooking g,String slotId) throws BookingDataAlreadyExistException {


        List<GroundBooking> s2=groundBookingRepository.findBySlotId(slotId);
        Optional<SlotDetails> s1 =slotDetailsRepository.findById(slotId);

        if (s1.isPresent()) {
            int PlayersAllowed = s1.get().getNoOfPlayersAllowed();

            if (s2.size() == PlayersAllowed-1){
                s1.get().setSlotStatus(SlotStatus.not_Available);
                slotDetailsRepository.save(s1.get());
            }

            if (s2.size() >= PlayersAllowed) {
                throw new BookingDataAlreadyExistException();
            }
        }
          g.setBookingStatus(BookingStatus.booked);
        GroundBooking saveBooking = groundBookingRepository.save(g);
        EmailDTO emailDTO=new EmailDTO();
        emailDTO.setEmail(saveBooking.getPlayerEmailId());
        emailDTO.setSubject("Booking is Confirmed");
        emailDTO.setBody("Hello,\\n\\nYour booking with Booking ID: "+saveBooking.getBookingId()+" has been confirmed. The current status of your booking is:" +saveBooking.getBookingStatus().toString() +". Thank you for using our website Thrive Sports Arena!");
        rabbitTemplate.convertAndSend(BookingConfiguration.EXCHANGE,BookingConfiguration.ROUTING_KEY,emailDTO);


        return saveBooking;
    }

    @Override
    public SlotDetails saveSlotDetails(SlotDetails s) throws SlotDataAlreadyExistException {
        Optional<SlotDetails> s1 = Optional.ofNullable(slotDetailsRepository.findBySlotDateAndStartTimeAndEndingTime(s.getSlotDate(), s.getStartTime(), s.getEndingTime()));
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
            throw new BookingIdNotFoundException();
        }
        return g1.get();
    }

    @Override
    public List<GroundBooking> getBooking(){
        List<GroundBooking> glist= groundBookingRepository.findAll();
        return glist;
    }




    @Override
    public GroundBooking cancelGroundBooking(String bookingId) throws BookingIdNotFoundException{
        Optional<GroundBooking> existing=groundBookingRepository.findById(bookingId);
        if(existing.isEmpty())
        {
            throw new BookingIdNotFoundException();
        }

        GroundBooking existingNormal=existing.get();
        existingNormal.setBookingStatus(BookingStatus.canceled);
         GroundBooking g11=groundBookingRepository.save(existingNormal);
         return g11;
     }

    @Override
    public List<GroundBooking> getGroundBookingByPlayerId(String playerEmailId) throws EmailIdNotFoundException {
        List<GroundBooking> g3=groundBookingRepository.findByPlayerEmailId(playerEmailId);

        if(g3!=null)
        {
            return g3;
        }
        throw new EmailIdNotFoundException();
    }

    @Override
    public List<GroundBooking> getGroundBookingByOwnerId(String ownerEmailId) throws EmailIdNotFoundException {
        List<GroundBooking> g4=groundBookingRepository.findByOwnerEmailId(ownerEmailId);
        if(g4.isEmpty())
        {
            throw new EmailIdNotFoundException();
        }
        return g4;
    }

    @Override
    public GroundBooking updateGroundBooking(GroundBooking g,String bookingId) throws BookingIdNotFoundException{
        Optional<GroundBooking> existing=groundBookingRepository.findById(bookingId);
        if(existing.isEmpty())
        {
        throw new BookingIdNotFoundException();
        }
        GroundBooking existingNormal=existing.get();
        existingNormal.setGroundId(g.getGroundId());
        existingNormal.setSlotId(g.getSlotId());
        existingNormal.setSlotBookingDate(g.getSlotBookingDate());
        existingNormal.setBookingStatus(g.getBookingStatus());
        existingNormal.setPlayerEmailId(g.getPlayerEmailId());
        existingNormal.setOwnerEmailId(g.getOwnerEmailId());
        existingNormal.setStartTime(g.getStartTime());
        existingNormal.setEndTime(g.getEndTime());
        existingNormal.setPricePerHour(g.getPricePerHour());

        return groundBookingRepository.save(existingNormal);
    }

    @Override
    public SlotDetails getSlotDetails(String slotId) throws SlotNotFoundException {
        Optional<SlotDetails> g1= slotDetailsRepository.findById(slotId);
        if(g1.isEmpty())
        {
            throw new SlotNotFoundException();
        }
        return g1.get();
    }

    @Override
    public SlotDetails getSlots(String groundId, Date slotDate) throws SlotNotFoundException{
        SlotDetails s1 = slotDetailsRepository.findByGroundIdAndSlotDate(groundId, slotDate);

        System.out.println("Hello"+s1);

        if (s1 == null) {
            throw new SlotNotFoundException();
        }

        return s1;


    }

    @Override
    public SlotDetails getAvailableSlots(SlotStatus slotStatus) throws SlotNotFoundException{
        Optional<SlotDetails> s2=Optional.ofNullable(slotDetailsRepository.findBySlotStatus(slotStatus));
        if(s2.isEmpty()){
            throw new SlotNotFoundException();
        }
        return s2.get();
    }




}
