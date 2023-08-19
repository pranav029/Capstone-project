import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookingdetailsService {
   baseUrl= "http://localhost:8090";
  private apiUrl = this.baseUrl+'/api/v1/booking';
  private ArenaUrl=this.baseUrl+'/api/v1/arena/details';

  constructor(private http:HttpClient) { }

  getbookings(playerEmailId: any):Observable<any>{
    return this.http.get(`${this.apiUrl}/getAllBookingByPlayerId/${playerEmailId}`);
  }  

  ownerbookings(ownerEmailId: any):Observable<any>{
    return this.http.get(`${this.apiUrl}/getAllBookingByOwnerId/${ownerEmailId}`);
  }  


  getgroundId(groundId: any):Observable<any>{
    return this.http.get(`${this.ArenaUrl}/${groundId}`);
  }









}
