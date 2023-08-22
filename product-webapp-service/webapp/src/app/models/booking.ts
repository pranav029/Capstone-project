export class book {
    constructor(
        public groundId: String,
        public slotId: string,
        public slotBookingDate: Date,
        public bookingStatus: string,
        public playerEmailId: String | null,
        public ownerEmailId: string,
        public startTime: String,
        public endTime: String,
        public pricePerHour: string,
        public bookingId?: String | null
    ) { }
}


enum BookingStatus {
    booked, canceled
}