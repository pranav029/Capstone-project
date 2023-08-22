import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingSlot } from 'src/app/models/BookingSlot';
import { THRIVE_BASE_URL } from '../../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class SavingslotService {
  private slot_URL = 'http://localhost:8012' + '/api/v1/booking'
  private arena_URL = THRIVE_BASE_URL + '/api/v1/arena/details';


  constructor(private http: HttpClient) { }

  saveSlot(slotData: any): Observable<any> {
    return this.http.post(`${this.slot_URL}/saveSlotDetails`, slotData);
  }

  getArena(ownerEmail: any): Observable<any> {
    return this.http.get(`${this.arena_URL}/owner/${ownerEmail}`)
  }

  getSlotsForGround(groundId: string, slotDate: string): Observable<BookingSlot[]> {
    console.log(groundId)
    console.log(slotDate)
    return this.http.get<BookingSlot[]>(`${this.slot_URL}/getSlot/${groundId}/${slotDate}`)
  }
}
