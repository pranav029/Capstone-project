import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { THRIVE_BASE_URL } from '../../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class BookingdetailsService {
  private apiUrl = THRIVE_BASE_URL + '/api/v1/booking';
  private ArenaUrl = THRIVE_BASE_URL + '/api/v1/arena/details';

  constructor(private http: HttpClient) { }

  getbookings(playerEmailId: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAllBookingByPlayerId/${playerEmailId}`);
  }

  ownerbookings(ownerEmailId: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAllBookingByOwnerId/${ownerEmailId}`);
  }


  getgroundId(groundId: any): Observable<any> {
    return this.http.get(`${this.ArenaUrl}/${groundId}`);
  }

}
