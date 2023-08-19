import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileUpdateService {
  baseUrl= "http://localhost:8090";

  constructor(private http : HttpClient) { }
  profileupdate(email: String) : Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/thrive/user/getUser/${email}`)
}
addprofileupdate(email: String,updatedata: any) : Observable<any>{
  return this.http.put(`${this.baseUrl}/api/v1/thrive/user/Update/${email}`,updatedata)
}
}
