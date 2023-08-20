import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { GroundDetailsServiceService } from '../../services/groundDetails/ground-details-service.service';
import { getFormattedAddress } from '../../utils/AddressUtils';
import { getOpenOrCloseStatus } from '../../utils/TimeUtils';

@Component({
  selector: 'app-ground-item-card',
  templateUrl: './ground-item-card.component.html',
  styleUrls: ['./ground-item-card.component.css']
})
export class GroundItemCardComponent {
  sport: string;
  sportDetails : any[] = [];

  constructor(private route: ActivatedRoute, private _groundDetailsService: GroundDetailsServiceService) {
    this.sport = '';
    this.sportDetails = [];
  }

  ngOnInit() {
    this.sport = this.route.snapshot.paramMap.get('sport') || '';

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

        console.log(this.sport, data);
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }
}
