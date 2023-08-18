import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './models/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { }
  userRegister(register : Register) : Observable<any>{
    return this.http.post('http://localhost:8086/register/adduser',register);

}
}
