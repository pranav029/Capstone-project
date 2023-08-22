import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ApiResponse } from 'src/app/models/ApiResponse';
import { arena } from 'src/app/models/arena';
import { book } from 'src/app/models/booking';
import { BookingSlot } from 'src/app/models/BookingSlot';
import { Ground } from 'src/app/models/Ground';
import { Success } from 'src/app/models/Resource';
import { AuthService } from 'src/app/services/auth/AuthService';
import { BookingdetailsService } from 'src/app/services/booking/bookingdetails.service';
import { GroundDetailService } from 'src/app/services/groundDetails/GroundDetailService';
import { ServService } from 'src/app/services/serv/serv.service';
import { SavingslotService } from 'src/app/services/slot/savingslot.service';
import { GroundDetailsServiceService } from '../../services/groundDetails/ground-details-service.service';
import { getFormattedAddress } from '../../utils/AddressUtils';
import { getOpenOrCloseStatus } from '../../utils/TimeUtils';
import { WindowRefService } from '../../window-ref.service';

const STATUS_BOOKED = "BOOKED"

@Component({
  selector: 'app-ground-item-card',
  templateUrl: './ground-item-card.component.html',
  styleUrls: ['./ground-item-card.component.css'],
  providers: [WindowRefService]
})
export class GroundItemCardComponent {
  // groundId!: string | null;
  sport: string | null;
  sportDetails: any[] = [];
  minDate = new Date();
  slots: BookingSlot[] = [];
  grounds: arena[] | null = []
  ground!: Ground
  selectedDate = ''
  isFetchingData = false

  constructor(
    private route: ActivatedRoute,
    private _groundDetailsService: GroundDetailsServiceService,
    private winRef: WindowRefService,
    private groundService: ServService,
    private groundDetailService: GroundDetailService,
    private router: Router,
    private savingSlotService: SavingslotService,
    private authService: AuthService,
    private bookingDetailsService: BookingdetailsService
  ) {
    this.sport = '';
    this.sportDetails = [];
  }

  ngOnInit() {
    this.getParams()
    this.fetchGrounds()
  }

  datePickerFilter(d: Date | null) {
    const day = d && d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return true;
  }

  submitButton(slot: BookingSlot) {
    this.payWithRazor(slot);
  }

  payWithRazor(slot: BookingSlot) {
    const options: any = {
      key: 'rzp_test_uvnaJwaBxinQTt',
      amount: 125500, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: '', // company name or product name
      description: '',  // product description
      // image: './assets/logo.png', // company logo or product image
      // order_id: val, // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: '#0c238a'
      }
    };
    options.handler = ((response: any, error: any) => {
      options.response = response;
      console.log(response);
      console.log(options);
      this.saveBooking(slot)
      // this.router.navigate(['/confirm', {
      //   'groundId': this.ground.groundId,
      //   'date': this.selectedDate
      // }])
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }

  private fetchGrounds() {
    if (!this.sport) return;
    this.groundService.filter(this.sport.toUpperCase()).subscribe((response: ApiResponse<arena[]>) => {
      this.grounds = response.data as arena[]
      console.log(this.grounds)
    })

    this.groundDetailService.fetchGround(this.sport).subscribe((resource) => {
      if (resource instanceof Success) {
        this.ground = resource.data
      }
    })
  }

  private getParams() {
    this.sport = this.route.snapshot.paramMap.get('sport');
    console.log(this.sport?.toUpperCase())
  }

  onDatePicked() {
    console.log(new Date(Date.parse(this.selectedDate)).toISOString())
    this.fetchSlots()
  }

  private fetchSlots() {
    this.savingSlotService.getSlotsForGround(this.sport ? this.sport : '', new Date(Date.parse(this.selectedDate)).toISOString()).subscribe((item: BookingSlot[]) => {
      this.slots = []
      this.slots = item
      console.log(item)
    })
  }

  private saveBooking(slot: BookingSlot) {
    if (this.ground.groundId) {
      const booking = new book(
        this.ground.groundId,
        slot.slotId,
        new Date(Date.parse(this.selectedDate)),
        STATUS_BOOKED,
        this.authService.getUser(),
        this.ground.ownerEmail,
        slot.startTime,
        slot.endingTime,
        slot.hourlyPrice
      );
      this.bookingDetailsService.saveBooking(booking).subscribe((item: book) => {
        this.router.navigate(['/confirm', { groundId: this.ground.groundId, bookingId: item.bookingId }])
      })
    }
  }
}
