import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { THRIVE_BASE_URL } from '../../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class ProfileUpdateService {

  constructor(private http: HttpClient) { }
  profileupdate(email: String): Observable<any> {
    return this.http.get(`${THRIVE_BASE_URL}/api/v1/thrive/user/getUser/${email}`)
  }
  addprofileupdate(email: String, updatedata: any): Observable<any> {
    return this.http.put(`${THRIVE_BASE_URL}/api/v1/thrive/user/Update/${email}`, updatedata)
  }
}
