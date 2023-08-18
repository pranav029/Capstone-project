import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookingdetailsService {
  private apiUrl = 'http://localhost:8082/api/v1';
  private ArenaUrl='http://localhost:8085/api/v1/arena/details';

  constructor(private http:HttpClient) { }

  getbookings(playerEmailId: String):Observable<any>{
    return this.http.get(`${this.apiUrl}/getAllBookingByPlayerId/${playerEmailId}`);
  }  

  ownerbookings(ownerEmailId: String):Observable<any>{
    return this.http.get(`${this.apiUrl}/getAllBookingByOwnerId/${ownerEmailId}`);
  }  


  getgroundId(groundId: String):Observable<any>{
    return this.http.get(`${this.ArenaUrl}/${groundId}`);
  }









}
