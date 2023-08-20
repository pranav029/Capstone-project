import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { THRIVE_BASE_URL } from '../../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class GroundDetailsServiceService {

  constructor(private http: HttpClient) { }

  getGroundDetails(sport: String): Observable<any> {
    return this.http.get(`${THRIVE_BASE_URL}/api/v1/arena/details/type/${sport}`)
  }
}
