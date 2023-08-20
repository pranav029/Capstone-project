import { Component, OnInit } from '@angular/core';
import { BookingdetailsService } from '../../services/booking/bookingdetails.service';
import { book } from '../../models/booking';
import { ground } from '../../models/ground2';



@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css'],

})
export class BookingdetailsComponent implements OnInit{

   public books!:Array<book>;
   public grounds!:ground;
  

  constructor(private bookingService: BookingdetailsService) {}

  ngOnInit(): void {
    const playerEmailId=localStorage.getItem('email')

    this.bookingService.getbookings(playerEmailId).subscribe(
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

