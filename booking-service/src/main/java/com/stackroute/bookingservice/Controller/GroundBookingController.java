package com.stackroute.bookingservice.Controller;

import com.stackroute.bookingservice.Domain.GroundBooking;
import com.stackroute.bookingservice.Domain.SlotDetails;
import com.stackroute.bookingservice.Exception.BookingDataAlreadyExistException;
import com.stackroute.bookingservice.Exception.BookingIdNotFoundException;
import com.stackroute.bookingservice.Exception.PlayerEmailIdNotFoundException;
import com.stackroute.bookingservice.Exception.SlotDataAlreadyExistException;
import com.stackroute.bookingservice.Service.GroundBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class GroundBookingController {

    @Autowired
    private GroundBookingService groundBookingService;


    @PostMapping("/saveGroundBooking/{slotId}")
    public ResponseEntity<?> saveGroundBooking(@RequestBody GroundBooking g, @PathVariable String slotId) throws BookingDataAlreadyExistException {
        GroundBooking g1;
        try {
            g1 = groundBookingService.saveGroundBooking(g, slotId);
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
            throw new BookingIdNotFoundException(bookingId);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<GroundBooking>(g1, HttpStatus.OK);
    }



    @PutMapping("/cancelBooking/{bookingId}")
    public ResponseEntity<?> cancelGroundBooking(@PathVariable String bookingId) throws BookingIdNotFoundException {
        GroundBooking g2;
        try {
            g2 = groundBookingService.cancelGroundBooking(bookingId);
        } catch (BookingIdNotFoundException b) {
            throw new BookingIdNotFoundException(bookingId);
        } catch (Exception ex) {
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>("Booking Canceled successfully", HttpStatus.OK);
    }
}
