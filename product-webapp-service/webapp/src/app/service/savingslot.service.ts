import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavingslotService {

  private slot_URL='http://localhost:8082/api/v1'
  private arena_URL='http://localhost:8085/api/v1/arena/details';


  constructor(private http:HttpClient) {}

  saveSlot(slotData: any):Observable<any>{
    return this.http.post(`${this.slot_URL}/saveSlotDetails`,slotData);
  }

  getArena(ownerEmail: any):Observable<any>{
    return this.http.get(`${this.arena_URL}/owner/${ownerEmail}`)
  }



}
