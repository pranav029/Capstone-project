import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { Router } from '@angular/router';
import { UserService } from '../user.service'; // Update this import based on your actual path
import { Register, UserRole } from '../models/register';
import { AuthService } from '../services/AuthService';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role!: any;
  constructor(
    private _dialog: MatDialog,
    private _router: Router,
    private authService: AuthService
    // Inject UserService
  ) { }


  ngOnInit(): void {
    console.log(this.role);

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

  signOut() {
    this.authService.clear()
    this._router.navigate(['/'])
  }




  // isOwner(): boolean {

  //   if(String(this.role)=="OWNER"){

  //     return true;

  //   }
  //   return false;
  // }

  // isPlayer(): boolean {
  //    console.log(this.role)
  //   if(String(this.role)=="PLAYER"){
  //     return true;
  //   }
  //   return false;

  // }

  isUserLoggedIn(): boolean {
    return this.authService.isUserLoggedIn()
  }

  isAdmin(): boolean {
    return this.authService.isAdminUser();
  }
}
