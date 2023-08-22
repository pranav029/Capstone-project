import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { book } from 'src/app/models/booking';
import { Ground } from 'src/app/models/Ground';
import { Failure, Loading, Resource, Success } from 'src/app/models/Resource';
import { BookingdetailsService } from 'src/app/services/booking/bookingdetails.service';
import { GroundDetailService } from 'src/app/services/groundDetails/GroundDetailService';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {
  groundId: string | null = null
  bookingId: string | null = null
  ground: Ground | null = null
  booking: book | null = null
  isFetchingGround = false

  constructor(
    private route: ActivatedRoute,
    private groundDetailService: GroundDetailService,
    private bookingDetailService: BookingdetailsService
  ) { }

  ngOnInit(): void {
    this.fetchParams()
    this.fetchGround()
  }

  private fetchParams() {
    this.groundId = this.route.snapshot.paramMap.get('groundId')
    this.bookingId = this.route.snapshot.paramMap.get('bookingId')
    console.log(this.groundId)
  }

  private fetchGround() {
    if (this.groundId)
      this.groundDetailService.fetchGround(this.groundId).subscribe((resource: Resource<Ground>) => {
        if (resource instanceof Success) {
          this.ground = resource.data
          this.fetchBooking()
        }
        if (resource instanceof Failure) {
          this.isFetchingGround = false
          this.ground = null
        }
        if (resource instanceof Loading) {
          this.isFetchingGround = true
          this.ground = null
        }
      })
  }

  private fetchBooking() {
    if (this.bookingId)
      this.bookingDetailService.getBooking(this.bookingId).subscribe((item: book) => {
        this.booking = item
        this.isFetchingGround = false
        console.log()
      },
        () => {
          this.isFetchingGround = false
        }
      )

  }

  getDate(): string {
    return this.booking?.slotBookingDate? this.booking?.slotBookingDate.toString().split('T')[0] : ''
  }
}
