package com.stackroute.paymentservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/thrive/payments")
public class PaymentController {
    private final PaymentService paymentService;

    @Autowired
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping
    public ResponseEntity<Payment> savePayment(@RequestBody Payment payment) {
        Payment savedPayment = paymentService.savePayment(payment);
        return ResponseEntity.ok(savedPayment);
    }

    @GetMapping("/{billId}")
    public ResponseEntity<Payment> fetchPaymentById(@PathVariable Long billId) {
        Payment payment = paymentService.fetchPaymentById(billId);
        if (payment != null) {
            return ResponseEntity.ok(payment);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/booking/{bookingId}")
    public ResponseEntity<PaymentStatus> fetchStatusForBooking(@PathVariable Long bookingId) {
        PaymentStatus status = paymentService.fetchStatusForBooking(bookingId);
        if (status != null) {
            return ResponseEntity.ok(status);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
