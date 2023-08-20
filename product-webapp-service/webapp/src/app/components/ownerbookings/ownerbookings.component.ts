import { Component } from '@angular/core';
import { book } from '../../models/booking';
import { ground } from '../../models/ground2';
import { BookingdetailsService } from '../../services/booking/bookingdetails.service';

@Component({
  selector: 'app-ownerbookings',
  templateUrl: './ownerbookings.component.html',
  styleUrls: ['./ownerbookings.component.css']
})
export class OwnerbookingsComponent {

  public books!:Array<book>;
   public grounds!:ground;
   ownerEmailId:any;

  constructor(private bookingService: BookingdetailsService) {}

  ngOnInit(): void {
    this.ownerEmailId=(localStorage.getItem('email'));

    this.bookingService.ownerbookings(this.ownerEmailId).subscribe(
      (bookingdata: any)=> {
        this.books=bookingdata;

         this.books.forEach((booking)=>{
          this.bookingService.getgroundId(booking.groundId).subscribe(
          (groundData:any)=>{
             this.grounds=groundData.data;
             console.log(this.grounds);
          },
          
          (error:any)=>{
            console.error('Error fetching ground details',error);
            alert(error.message);
          }
          )
        })
  
      },
      (error)=>{
        console.error('Error fetching bookings',error);
        alert(error.message);
      }
    );
  }


  
  getPreviousBookings(): book[] {
    const currentDate = new Date();
    return this.books.filter(book => new Date(book.slotBookingDate) < currentDate);
  }

  getUpcomingBookings(): book[] {
    const currentDate = new Date();
    return this.books.filter(book => new Date(book.slotBookingDate) >= currentDate);
  }

}
