package com.stackroute.bookingservice.Controller;


import com.stackroute.bookingservice.Domain.GroundBooking;
import com.stackroute.bookingservice.Domain.SlotDetails;
import com.stackroute.bookingservice.Domain.SlotStatus;
import com.stackroute.bookingservice.Exception.*;
import com.stackroute.bookingservice.Service.GroundBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;


@RestController
@RequestMapping("/api/v1/booking")
@CrossOrigin(origins = "*")
public class GroundBookingController {

    @Autowired
    private GroundBookingService groundBookingService;


    @PostMapping("/saveGroundBooking/{slotId}")
    public ResponseEntity<?> saveGroundBooking(@RequestBody GroundBooking g, @PathVariable String slotId) throws BookingDataAlreadyExistException {
        GroundBooking g1;
        try {
            g.setSlotId(slotId);
            g1 = groundBookingService.saveGroundBooking(g,slotId);

        } catch (BookingDataAlreadyExistException g2) {
            throw new BookingDataAlreadyExistException();
        } catch (Exception e1) {
            return new ResponseEntity<>(e1.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(g1, HttpStatus.CREATED);
    }

    @PostMapping("/saveSlotDetails")
    public ResponseEntity<?> saveSlotDetails(@RequestBody SlotDetails s) throws SlotDataAlreadyExistException {
        SlotDetails s1;
        try {
            s1 = groundBookingService.saveSlotDetails(s);
        } catch (SlotDataAlreadyExistException s2) {
            throw new SlotDataAlreadyExistException();
        } catch (Exception e2) {
            return new ResponseEntity<>(e2.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(s1, HttpStatus.CREATED);
    }

    @GetMapping("/getAllBooking/{bookingId}")
    public ResponseEntity<?> getGroundBooking(@PathVariable String bookingId) throws BookingIdNotFoundException {
        GroundBooking g1;
        try {
            g1 = groundBookingService.getGroundBooking(bookingId);
        } catch (BookingIdNotFoundException b) {
            throw new BookingIdNotFoundException();
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<GroundBooking>(g1, HttpStatus.OK);
    }

@GetMapping("/getBooking")
public ResponseEntity<?> getBooking(){
    List<GroundBooking> g1=groundBookingService.getBooking();
    return new ResponseEntity<>(g1, HttpStatus.OK);
}


    @PutMapping("/cancelBooking/{bookingId}")
    public ResponseEntity<?> cancelGroundBooking(@PathVariable String bookingId) throws BookingIdNotFoundException {
        GroundBooking g2;
        try {
            g2 = groundBookingService.cancelGroundBooking(bookingId);
        } catch (BookingIdNotFoundException b) {
            throw new BookingIdNotFoundException();
        } catch (Exception ex) {
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(g2, HttpStatus.OK);
    }


    @GetMapping("/getAllBookingByPlayerId/{playerEmailId}")
    public ResponseEntity<?> getBookingByPlayerId(@PathVariable String playerEmailId) throws EmailIdNotFoundException
    {
        System.out.println(playerEmailId);
        List<GroundBooking> g3;
        try {
            g3=groundBookingService.getGroundBookingByPlayerId(playerEmailId);
        }
        catch (EmailIdNotFoundException p)
        {
            throw new EmailIdNotFoundException();
        }
        catch (Exception e1)
        {
            return new ResponseEntity<>(e1.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(g3,HttpStatus.OK);
    }

    @GetMapping("/getAllBookingByOwnerId/{ownerEmailId}")
    public ResponseEntity<?> getBookingByOwnerId(@PathVariable String ownerEmailId) throws EmailIdNotFoundException{
        List<GroundBooking> g4;
        try{
            g4=groundBookingService.getGroundBookingByOwnerId(ownerEmailId);
        }
        catch (EmailIdNotFoundException o)
        {
            throw new EmailIdNotFoundException();
        }
        catch (Exception e2){
            return new ResponseEntity<>(e2.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(g4,HttpStatus.OK);
    }

    @PutMapping("/UpdateBooking/{bookingId}")
    public ResponseEntity<?>updateGroundBooking(@RequestBody GroundBooking g,@PathVariable String bookingId) throws BookingIdNotFoundException{
        GroundBooking g2;
        try{
            g2=groundBookingService.updateGroundBooking(g,bookingId);
        }
        catch (BookingIdNotFoundException b){
            throw new BookingIdNotFoundException();
        }
        catch (Exception ex)
        {
            return new ResponseEntity<>(ex.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(g2,HttpStatus.OK);
    }

    @GetMapping("/getAllSlot/{slotId}")
    public ResponseEntity<?> getSlotDetails(@PathVariable String slotId) throws SlotNotFoundException
    {
        SlotDetails g1;
        try{
            g1=groundBookingService.getSlotDetails(slotId);
        }
        catch (SlotNotFoundException s)
        {
            throw new SlotNotFoundException();
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(g1,HttpStatus.OK);
    }
    @GetMapping("/getSlot/{groundId}/{slotDate}")
    public ResponseEntity<?> getSlot(@PathVariable String groundId, @PathVariable String slotDate) throws SlotNotFoundException{
                 List<SlotDetails> s1;
        System.out.println(slotDate);

                 try {
                     s1=groundBookingService.getSlots(groundId,slotDate);

                 }
                 catch (SlotNotFoundException s)
                 {
                     throw new SlotNotFoundException();
                 }
                 catch (Exception e)
                 {
                     return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
                 }

                return new ResponseEntity<>(s1,HttpStatus.OK);
    }

    @GetMapping("/getAvailableSlot/{slotStatus}")
    public ResponseEntity<?> getAvailableSlot(@PathVariable SlotStatus slotStatus) throws SlotNotFoundException
    {
        SlotDetails s1;
        try{
            s1=groundBookingService.getAvailableSlots(slotStatus);
        }
        catch (SlotNotFoundException s)
        {
            throw new SlotNotFoundException();
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(s1,HttpStatus.OK);

    }
}

