import { Component } from '@angular/core';
import { GroundType } from '../utils/common/GroundType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ground-list-component',
  templateUrl: './ground-list-component.component.html',
  styleUrls: ['./ground-list-component.component.css']
})
export class GroundListComponentComponent {
  groundList: string[]

  constructor(private router: Router) {
    this.groundList = Object.values(GroundType).map(function(val) {
      return val;
    });
  }

  onGroundClick(ground: string) {
    this.router.navigate(['/ground-list/', ground.toLowerCase() ])
  }
}
