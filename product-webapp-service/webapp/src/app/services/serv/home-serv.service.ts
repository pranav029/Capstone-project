import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { THRIVE_BASE_URL } from 'src/app/models/Constants';
@Injectable({
  providedIn: 'root'
})
export class HomeServService {
  constructor(private http: HttpClient) { }
  home(): Observable<any> {
    return this.http.get(THRIVE_BASE_URL + '/api/v1/arena/details/all');
  }
}

