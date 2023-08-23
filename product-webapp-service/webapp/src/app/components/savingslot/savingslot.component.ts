import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SavingslotService } from '../../services/slot/savingslot.service';

import { ground } from '../../models/ground2';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/AuthService';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-savingslot',
  templateUrl: './savingslot.component.html',
  styleUrls: ['./savingslot.component.css']
})
export class SavingslotComponent implements OnInit {

  slots!: FormGroup;
  public grounds!: Array<ground>;



  constructor(
    private fb: FormBuilder,
    private slotService: SavingslotService,
    private router: Router,
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) {
    this.slots = this.fb.group({
      groundId: [''],
      groundName: ['', Validators.required],
      slotDate: ['', Validators.required],
      noOfPlayersAllowed: ['', Validators.required],
      startTime: ['', Validators.required],
      endingTime: ['', Validators.required],
      groundCondition: ['', Validators.required],
      hourlyPrice: ['', Validators.required],
    });
  }



  ngOnInit(): void {

    const ownerEmail = this.authService.getUser()


    this.slotService.getArena(ownerEmail).subscribe(
      (bookingdata) => {
        this.grounds = bookingdata.data;

      },
      (error) => {
        console.error('Error fetching bookings', error);
      }
    );
  }


  savingslot() {
    console.log(this.slots.value)
    if (this.slots.valid) {


      const getGroundIdByGroundName = (targetGroundName: string) => {
        const foundGround = this.grounds.find(g => g.groundName === targetGroundName);
        return foundGround ? foundGround.groundId : null;
      }

      const targetGroundName = this.slots.value['groundName'];

      const foundGroundId = getGroundIdByGroundName(targetGroundName);



      this.slots.get('groundId')?.setValue(foundGroundId)
      console.log(this.slots);
      this.slotService.saveSlot(this.slots.value).subscribe(
        (Response: any) => {
          console.log('Slot saved succesfully: ', Response);
          this.showSnackBar("Slot added successfully")
          // alert("Added succesfully");
          this.router.navigate(['/grounds'])
        },
        (error: any) => {
          console.error('Eroor saving slots:', error);
          // alert(error.message);
          this.showSnackBar("Some error occured.Please try after sometime.")
        }
      )


    }

  }

  private showSnackBar(message: string) {
    this.snackbar.open(message, '', {
      duration: 4000,
      panelClass: ['snackbar-success']
    })
  }

  get slotDate() {
    return this.slots.get('slotDate');
  }

  get noOfPlayersAllowed() {
    return this.slots.get('noOfPlayersAllowed');
  }
  get startTime() {
    return this.slots.get('startTime');
  }
  get endingTime() {
    return this.slots.get('endingTime');
  }
  get groundCondition() {
    return this.slots.get('groundCondition');
  }

  get hourlyPrice() {
    return this.slots.get('hourlyPrice');
  }




}



