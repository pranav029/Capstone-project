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
  private userRole: string = '';
  constructor(private http: HttpClient) { }

  getuserrole(email : any):Observable<any>{
    return this.http.get(`http://localhost:8086/register/getUser/${email}`)
  }


  userLogin(login: Login): Observable<any> {
    return this.http.post<LoginResponse>('http://localhost:8082/api/v1/login', login).pipe(
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
