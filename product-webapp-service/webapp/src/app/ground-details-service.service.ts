import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroundDetailsServiceService {

  constructor(private http : HttpClient) { }

  getGroundDetails(sport: String) : Observable<any>{
    return this.http.get(`http://www.thrive-arena.eu-north-1.elasticbeanstalk.com/api/v1/arena/details/type/${sport}`)
  }
}
