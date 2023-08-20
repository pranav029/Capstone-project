import { Component } from '@angular/core';
import { ServService } from '../../services/serv/serv.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private service:ServService){
    

  }
  isLearnMoreVisible=false;
  toggleVisiblity(){
    this.isLearnMoreVisible=!this.isLearnMoreVisible
  }


}
