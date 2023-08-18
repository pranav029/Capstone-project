export class book{
    constructor(
        public bookingId: String,
        public groundId: String,
        public slotId: string,
        public slotBookingDate: Date,
        public bookingStatus: BookingStatus, 
    public playerEmailId:String, 
    public ownerEmailId: String, 
    public startTime: String, 
    public endTime: String,
    public pricePerHour: number ){}   

    }


 enum BookingStatus{
    booked, canceled
}