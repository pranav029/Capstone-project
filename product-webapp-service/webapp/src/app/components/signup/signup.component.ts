import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Register } from '../../models/register';
import { RegisterService } from '../../services/register/register.service';
import { MatDialogRef } from '@angular/material/dialog'; // Adjust the import based on your actual import path
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  register: Register = new Register();
  signupform: FormGroup;
  

  constructor(
    private _fb: FormBuilder,
    private _registerservice: RegisterService,
    // private _dialogref: MatDialogRef<SignupComponent>,
    private router: Router,
    private userservice:UserService
  ) {
    this.signupform = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      userRole :['',Validators.required]
      
    }, {
      validator: this.passwordMatchValidator
    });
  }
  ngOnInit(): void {
    

  }

  isEmailInvalid() {
    return this.signupform.get('email')?.invalid && (this.signupform.get('email')?.dirty || this.signupform.get('email')?.touched);
  }

  isEmailRequired() {
    return this.signupform.get('email')?.hasError('required');
  }

  isEmailInvalidFormat() {
    return this.signupform.get('email')?.hasError('email');
  }

  isPasswordInvalid() {
    return this.signupform.get('password')?.invalid && (this.signupform.get('password')?.dirty || this.signupform.get('password')?.touched);
  }

  isPasswordRequired() {
    return this.signupform.get('password')?.hasError('required');
  }

  isPasswordTooShort() {
    return this.signupform.get('password')?.hasError('minlength');
  }

  isConfirmPasswordInvalid() {
    return this.signupform.get('confirmPassword')?.invalid && (this.signupform.get('confirmPassword')?.dirty || this.signupform.get('confirmPassword')?.touched);
  }

  isConfirmPasswordRequired() {
    return this.signupform.get('confirmPassword')?.hasError('required');
  }

  isFormInvalid() {
    return this.signupform?.invalid;
  }

  onFormSubmit() {
    if (this.signupform.valid) {
      this.fillData();
      console.log(this.register);
      this._registerservice.userRegister(this.register).subscribe({
       
        next: (val: any) => {
          alert('Registration Complete');
          // this._dialogref.close();
          this.router.navigate(['/login']);
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    }
  }

  private fillData() {
    this.register.email = this.signupform.value.email;
    this.register.password = this.signupform.value.password;
    this.register.userRole = this.signupform.value.userRole;
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors(null);
    } else {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    }
  }
}
