import { Component, OnInit } from '@angular/core';
import { BookingdetailsService } from '../../services/booking/bookingdetails.service';
import { book } from '../../models/booking';
import { ground } from '../../models/ground2';
import { AuthService } from 'src/app/services/auth/AuthService';
import { Ground } from 'src/app/models/Ground';



@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css'],

})
export class BookingdetailsComponent implements OnInit {

  public books!: Array<book>;
  public grounds: Ground[] = [];


  constructor(
    private bookingService: BookingdetailsService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const playerEmailId = this.authService.getUser()

    this.bookingService.getbookings(playerEmailId).subscribe(
      (bookingdata: any) => {
        this.books = bookingdata;
        console.log(this.books)

        this.books.forEach((booking) => {
          this.bookingService.getgroundId(booking.groundId).subscribe(
            (groundData: Ground) => {
              this.grounds.push(groundData)
              console.log(this.grounds);
            },

            (error: any) => {
              console.error('Error fetching ground details', error);
              // alert(error.message);
            }
          )
        })

      },
      (error) => {
        console.error('Error fetching bookings', error);
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

