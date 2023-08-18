import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileUpdateService {

  constructor(private http : HttpClient) { }
  profileupdate(email: String) : Observable<any>{
    return this.http.get(`http://localhost:8086/register/getUser/${email}`)
}
addprofileupdate(email: String,updatedata: any) : Observable<any>{
  return this.http.put(`http://localhost:8086/register/Update/${email}`,updatedata)
}
}
