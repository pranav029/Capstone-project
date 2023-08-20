import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeServService {
  baseUrl='http://localhost:8090'
  constructor(private http:HttpClient) { }
  home( ):Observable<any>{
    return this.http.get(this.baseUrl+'/api/v1/arena/details/all');
  }
}

