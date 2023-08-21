import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getUser } from 'src/app/models/getuser';
import { THRIVE_BASE_URL } from '../../models/Constants';
import { AuthService } from '../auth/AuthService';

@Injectable({
  providedIn: 'root'
})
export class ProfileUpdateService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
  profileupdate(email: String): Observable<any> {
    return this.http.get(`http://localhost:8016/api/v1/thrive/user/getUser/${email}`)
  }
  addprofileupdate(email: String, updatedata: getUser): Observable<any> {
    return this.http.put(`http://localhost:8016/api/v1/thrive/user/Update/${email}`, updatedata)
  }

  getProfile(): Observable<getUser> {
    console.log(this.authService.getUser())
    return this.http.get<getUser>(`http://localhost:8016/api/v1/thrive/user/getUser/${this.authService.getUser()}`);
  }
}
