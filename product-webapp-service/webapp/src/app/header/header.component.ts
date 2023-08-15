import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private _dialog : MatDialog){}
  openLoginForm(){
    this._dialog.open(LoginComponent)
  }
  openRegisterationForm(){
    this._dialog.open(SignupComponent)
  }

}
