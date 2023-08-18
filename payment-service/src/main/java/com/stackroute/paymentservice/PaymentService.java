package com.stackroute.paymentservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {
    private final PaymentRepository paymentRepository;

    @Autowired
    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    public Payment savePayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    public Payment fetchPaymentById(Long billId) {
        return paymentRepository.findById(billId).orElse(null);
    }

    public PaymentStatus fetchStatusForBooking(Long bookingId) {
        Payment payment = paymentRepository.findById(bookingId).get();
        return payment != null ? payment.getStatus() : null;
    }
}
