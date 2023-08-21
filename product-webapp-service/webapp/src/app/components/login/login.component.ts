import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Login } from '../../models/login';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService, THRIVE_ROLE, THRIVE_USER_ID } from '../../services/auth/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: Login = {};
  loginform: FormGroup;
  userRole!: any;

  constructor(
    private _fb: FormBuilder,
    private _loginservice: UserService,
    // private _dialogref: MatDialogRef<LoginComponent>, // Update the import here
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.loginform = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  isEmailInvalid() {
    return this.loginform.get('email')?.invalid && (this.loginform.get('email')?.dirty || this.loginform.get('email')?.touched);
  }

  isEmailRequired() {
    return this.loginform.get('email')?.hasError('required');
  }

  isEmailInvalidFormat() {
    return this.loginform.get('email')?.hasError('email');
  }

  isPasswordInvalid() {
    return this.loginform.get('password')?.invalid && (this.loginform.get('password')?.dirty || this.loginform.get('password')?.touched);
  }

  isPasswordRequired() {
    return this.loginform.get('password')?.hasError('required');
  }

  isPasswordTooShort() {
    return this.loginform.get('password')?.hasError('minlength');
  }
  isFormInvalid() {
    return !this.loginform.valid;
  }


  onFormSubmit() {
    console.log('login submit')
    if (this.loginform.valid) {
      this.fillData();
      this._loginservice.userLogin(this.login).subscribe(data => {
        console.log(data);
        if (data != null) {
          localStorage.setItem(THRIVE_USER_ID, this.loginform.value.email);
          alert('login successful')
          console.log(this.userRole)
          // this.router.navigate(['/'])
          if (!this.authService.isAdminUser()) {
            this.router.navigate(['/dashboard'])
          }
          else {
            this.router.navigate(['/home'])
          }
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
