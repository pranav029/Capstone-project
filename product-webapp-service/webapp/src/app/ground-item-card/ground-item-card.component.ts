import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { GroundDetailsServiceService } from '../ground-details-service.service';
import { getFormattedAddress } from '../utils/AddressUtils';
import { getOpenOrCloseStatus } from '../utils/TimeUtils';
import { WindowRefService } from '../window-ref.service';

@Component({
  selector: 'app-ground-item-card',
  templateUrl: './ground-item-card.component.html',
  styleUrls: ['./ground-item-card.component.css'],
  providers: [WindowRefService]
})
export class GroundItemCardComponent {
  sport: string;
  sportDetails : any[] = [];
  minDate = new Date();
  slots: any[] = [];

  constructor(private route: ActivatedRoute, private _groundDetailsService: GroundDetailsServiceService, private winRef: WindowRefService) {
    this.sport = '';
    this.sportDetails = [];
  }

  ngOnInit() {
    this.sport = this.route.snapshot.paramMap.get('sport') || '';

    //Get ground details
    this._groundDetailsService.getGroundDetails(this.sport.toUpperCase()).subscribe({
      next: (val: any) => {
        let data = val.data;

        data.forEach((item: any) => {
          this.sportDetails.push({
            id: item.groundId,
            image: item.groundImageUrl,
            name: item.groundName,
            description: item.description,
            address: getFormattedAddress(item.address),
            status: getOpenOrCloseStatus(item.slot.openingTime, item.slot.closingTime),
            openingTime: item.slot.openingTime,
            closingTime: item.slot.closingTime,
            ownerEmail: item.ownerEmail
          })
        });
      },
      error: (err: any) => {
        console.error(err);
      }
    })

    //TODO - fetch from API
    this.slots = [{
      openingTime: "8:00",
      closingTime: "10:00"
    }, {
      openingTime: "10:00",
      closingTime: "12:00"
    }, {
      openingTime: "12:00",
      closingTime: "14:00"
    }, {
      openingTime: "14:00",
      closingTime: "16:00"
    }, {
      openingTime: "16:00",
      closingTime: "18:00"
    }, {
      openingTime: "18:00",
      closingTime: "20:00"
    }]
  }

  datePickerFilter(d: Date | null) {
    const day = d && d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return true;
  }

  submitButton(slot: any, groundId: string) {
    this.payWithRazor("Hello");
  }

  payWithRazor(val: any) {
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
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }
}
