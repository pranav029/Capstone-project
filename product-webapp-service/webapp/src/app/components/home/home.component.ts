import { Component, OnInit } from '@angular/core';
import { arena } from '../../models/arena';
import { HomeServService } from '../serv/home-serv.service';
import { ServService } from '../serv/serv.service';
import { ApiResponse } from 'src/app/models/ApiResponse';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public homes:any[]=[];

  constructor(
    private homesevice:HomeServService,
    private servservice: ServService
    ){}
  ngOnInit(): void {
    this.homesevice.home().subscribe(
      (homedata)=>{
        console.log(homedata.data);
        homedata.data.forEach((element: any) => {
          this.homes.push(element)
        });
        // this.homes.push(homedata.data);
        console.log(this.homes);
      },
      (error)=>{
        console.error('error fetching details', error);
      }

    );
  }

  filter(type:string){
    console.clear()
    console.log(type)
     this.servservice.filter(type).subscribe(
      (filterdata: ApiResponse<arena[]>) => {
        if (filterdata.data){
          this.homes = []
          filterdata.data.forEach(item => this.homes.push(item))
        }

        console.log(filterdata);
      },
      (error) => {
        console.error('error fetching details', error);

      })
    }

}
