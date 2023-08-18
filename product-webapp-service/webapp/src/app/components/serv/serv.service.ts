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

  constructor(private http: HttpClient) { }
  filter(groundType: String): Observable<ApiResponse<arena[]>> {
    return this.http.get<ApiResponse<arena[]>>('http://localhost:8085/api/v1/arena/details/type/' + groundType)
  }
}
