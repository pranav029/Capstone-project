import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './models/login';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface LoginResponse {
  userRole: string;
  // You can add other properties here based on your server response
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl= "http://localhost:8090";
  private userRole: string = '';
  constructor(private http: HttpClient) { }

  getuserrole(email : any):Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/thrive/user/getUser/${email}`)
  }


  userLogin(login: Login): Observable<any> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/api/v1/auth/login`, login).pipe(
      tap(response => {
        if (response && response.userRole) {
          this.userRole = response.userRole;
        }
      })
    );
  }

  
  getUserRole(): string {
    console.log(this.userRole)
    return this.userRole;
  }
  
}
