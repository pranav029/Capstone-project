// import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { arena } from 'src/app/models/arena';
@Injectable({
  providedIn: 'root'
})
export class ServService {
  baseUrl="http://localhost:8090"

  constructor(private http: HttpClient) { }
  filter(groundType: String): Observable<ApiResponse<arena[]>> {
    return this.http.get<ApiResponse<arena[]>>(this.baseUrl+'/api/v1/arena/details/type/' + groundType)
  }
}
