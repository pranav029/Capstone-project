import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http : HttpClient) { }
  userLogin(login : Login) : Observable<any>{
    return this.http.post('http://localhost:8082/api/v1/login',login)
}
}