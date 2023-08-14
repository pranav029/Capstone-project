import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Register } from '../models/register';
import { RegisterService } from '../register.service';
import { MatDialogRef } from '@angular/material/dialog'; // Adjust the import based on your actual import path

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  register: Register = new Register();
  signupform: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _registerservice: RegisterService,
    private _dialogref: MatDialogRef<SignupComponent> 
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

  get isEmailInvalid() {
    return this.signupform.get('email')?.invalid && (this.signupform.get('email')?.dirty || this.signupform.get('email')?.touched);
  }

  get isEmailRequired() {
    return this.signupform.get('email')?.hasError('required');
  }

  get isEmailInvalidFormat() {
    return this.signupform.get('email')?.hasError('email');
  }

  get isPasswordInvalid() {
    return this.signupform.get('password')?.invalid && (this.signupform.get('password')?.dirty || this.signupform.get('password')?.touched);
  }

  get isPasswordRequired() {
    return this.signupform.get('password')?.hasError('required');
  }

  get isPasswordTooShort() {
    return this.signupform.get('password')?.hasError('minlength');
  }

  get isConfirmPasswordInvalid() {
    return this.signupform.get('confirmPassword')?.invalid && (this.signupform.get('confirmPassword')?.dirty || this.signupform.get('confirmPassword')?.touched);
  }

  get isConfirmPasswordRequired() {
    return this.signupform.get('confirmPassword')?.hasError('required');
  }

  get isFormInvalid() {
    return this.signupform?.invalid;
  }

  onFormSubmit() {
    if (this.signupform.valid) {
      this.fillData();
      console.log(this.register);
      this._registerservice.userRegister(this.register).subscribe({
       
        next: (val: any) => {
          alert('Registration Complete');
          this._dialogref.close();
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
