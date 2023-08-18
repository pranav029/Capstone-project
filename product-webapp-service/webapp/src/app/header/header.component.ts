import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { Router } from '@angular/router';
import { UserService } from '../user.service'; // Update this import based on your actual path
import { Register, UserRole } from '../models/register';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public resister!:Register;
  constructor(
    private _dialog: MatDialog,
    private _router: Router,
    private userService: UserService // Inject UserService
  ) {}

  
  ngOnInit(): void {
    const email=localStorage.getItem('email');
    this.userService.getuserrole(email).subscribe(
      (userData:any)=>
      {
        console.log(userData);
        this.resister=userData;
        console.log(this.resister)
      },
      (error: any)=>
      {
        console.error('Error fetching details',error);
      }
    
    );

  }

  // openLoginForm() {
  //   const email=localStorage.getItem('email');
  //   this.userService.getuserrole(email).subscribe(
  //     (userData:any)=>
  //     {
  //       console.log(userData);
  //       this.resister=userData.data;
  //     },
  //     (error: any)=>
  //     {
  //       console.error('Error fetching details',error);
  //     }
    
  //   );

  //   this._dialog.open(LoginComponent);
  // }

  // openRegisterationForm() {
  //   this._dialog.open(SignupComponent);
  // }



 role!:String;

  
  isOwner(): boolean {
   this.role=String(this.resister.userRole);
   
console.log("hello"+this.role);

   
    if(this.role=="OWNER"){
      console.log("Hello")
      return true;

    }
    return false;
  }

  isPlayer(): boolean {
    this.role=String(this.resister.userRole);
    console.log("hii"+this.role);
    
    if(this.role=="PLAYER"){
      return true;
    }
    return false;
   
  }
}
