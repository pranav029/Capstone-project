import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../../models/register';
import { Observable } from 'rxjs';
import { THRIVE_BASE_URL } from '../../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }
  userRegister(register: Register): Observable<any> {
    return this.http.post(`${THRIVE_BASE_URL}/api/v1/thrive/user/adduser`, register);

  }
}
