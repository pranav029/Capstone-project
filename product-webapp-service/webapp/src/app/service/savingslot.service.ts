import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavingslotService {
  baseUrl= "http://localhost:8090";
  private slot_URL=this.baseUrl+'/api/v1/booking'
  private arena_URL=this.baseUrl+'/api/v1/arena/details';


  constructor(private http:HttpClient) {}

  saveSlot(slotData: any):Observable<any>{
    return this.http.post(`${this.slot_URL}/saveSlotDetails`,slotData);
  }

  getArena(ownerEmail: any):Observable<any>{
    return this.http.get(`${this.arena_URL}/owner/${ownerEmail}`)
  }



}
