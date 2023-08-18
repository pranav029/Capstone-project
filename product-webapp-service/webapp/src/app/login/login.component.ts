import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

import { Login } from '../models/login';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: Login={};
  loginform: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _loginservice: UserService,
    // private _dialogref: MatDialogRef<LoginComponent>, // Update the import here
    private router:Router
  ) {
    this.loginform = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    }, {
    });
  }

  get isEmailInvalid() {
    return this.loginform.get('email')?.invalid && (this.loginform.get('email')?.dirty || this.loginform.get('email')?.touched);
  }

  get isEmailRequired() {
    return this.loginform.get('email')?.hasError('required');
  }

  get isEmailInvalidFormat() {
    return this.loginform.get('email')?.hasError('email');
  }

  get isPasswordInvalid() {
    return this.loginform.get('password')?.invalid && (this.loginform.get('password')?.dirty || this.loginform.get('password')?.touched);
  }

  get isPasswordRequired() {
    return this.loginform.get('password')?.hasError('required');
  }

  get isPasswordTooShort() {
    return this.loginform.get('password')?.hasError('minlength');
  }
  get isFormInvalid() {
    return this.loginform?.invalid;
  }


  onFormSubmit() {
    if (this.loginform.valid) {
      this.fillData();
      this._loginservice.userLogin(this.login).subscribe(data=>{
        console.log(data);
        if(data!=null)
        {
          alert('login successful');
          // this._dialogref.close();
          localStorage.setItem('email',this.loginform.value.email);
          this.router.navigate(['/header'])
        }
        // next: (val: any) => {
        
        //   alert('login successful');
         
          
        //   this._dialogref.close();
        // },
        error: (err: any) => {
          console.error(err);
        }
      });
    }
  }

  private fillData() {
    this.login.email = this.loginform.value.email;
    this.login.password = this.loginform.value.password;
  }
}