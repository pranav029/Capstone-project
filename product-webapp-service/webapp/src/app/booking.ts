export class book{
    constructor(
        public bookingId: String,
        public groundId: number,
        public slotId: string,
        public slotBookingDate: Date,
        public bookingStatus: BookingStatus, 
    public playerEmailId:String, 
    public ownerEmailId: String, 
    public startTime: Date, 
    public endTime: Date,
    public pricePerHour: number ){}     

}


 enum BookingStatus{
    booked, canceled
}