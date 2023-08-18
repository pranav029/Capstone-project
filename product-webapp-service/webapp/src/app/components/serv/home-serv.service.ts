import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeServService {

  constructor(private http:HttpClient) { }
  home( ):Observable<any>{
    return this.http.get('http://localhost:8085/api/v1/arena/details/all');
  }
}

