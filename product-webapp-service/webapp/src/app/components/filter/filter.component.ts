import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServService } from '../serv/serv.service';
import { arena } from '../../models/arena';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiResponse } from 'src/app/models/ApiResponse';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public filters: arena[] = [];
  @Output() filterEvent = new EventEmitter<string>();

  constructor(private servservice: ServService) { }
  groundtype!: FormGroup;
  ngOnInit(): void {
    this.groundtype = new FormGroup({
      groundcontrol: new FormControl('')
    })
    // const groundType="";




  }

  click(ground: string) {
    // console.log(ground);
    // this.servservice.filter(ground).subscribe(
    //   (filterdata: ApiResponse<arena[]>) => {
    //     if (filterdata.data)
    //       filterdata.data.forEach(item => this.filters.push(item))
    //     console.log(filterdata);
    //   },
    //   (error) => {
    //     console.error('error fetching details', error);

    //   }


    // );
    this.filterEvent.emit(ground)
  }


}
