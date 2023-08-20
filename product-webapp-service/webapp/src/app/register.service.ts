import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './models/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl= "http://localhost:8090";
  constructor(private http : HttpClient) { }
  userRegister(register : Register) : Observable<any>{
    return this.http.post(`${this.baseUrl}/api/v1/thrive/user/adduser`,register);

}
}
