import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getUser } from '../../models/getuser';
import { ProfileUpdateService } from '../../services/profile/profile-update.service';


@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  profileForm!: FormGroup;

  public user!: getUser;
  // Sample user profile data (replace with actual data)
  userProfile = {
    email: localStorage.getItem('email'),
    password: '',
    firstName: '',
    lastName: '',
    gender: '',
    houseNo: '',
    streetName: '',
    country: '',
    state: '',
    city: '',
    contactNo: '',
    userRole: ''
  };

  countries: string[] = ['USA', 'Canada', 'UK', 'Australia', 'India', 'Japan'];
  states: { [key: string]: string[] } = {
    USA: ['California', 'New York', 'Texas'],
    Canada: ['Ontario', 'Quebec'],
    UK: ['London'],
    Australia: ['Sydney'],
    India: ['Maharashtra', 'Karnataka', 'Tamil Nadu', 'West Bengal'],
    Japan: ['Tokyo', 'Osaka']
  };
  cities: { [key: string]: string[] } = {
    California: ['Los Angeles', 'San Francisco', 'San Diego'],
    'New York': ['New York City', 'Buffalo'],
    Texas: ['Houston', 'Dallas'],
    Ontario: ['Toronto', 'Ottawa'],
    Quebec: ['Montreal', 'Quebec City'],
    London: ['London'],
    Sydney: ['Sydney'],
    Maharashtra: ['Mumbai', 'Pune'],
    Karnataka: ['Bengaluru'],
    'Tamil Nadu': ['Chennai'],
    'West Bengal': ['Kolkata'],
    Tokyo: ['Tokyo'],
    Osaka: ['Osaka']
  };

  constructor(private fb: FormBuilder, private profileservice: ProfileUpdateService) {

  }

  ngOnInit(): void {
    this.fetchUser()
  }

  private fetchUser() {
    this.profileservice.getProfile().subscribe((user: getUser) => {
      this.user = user
      console.log(this.user)
      this.initForm()
      this.initControls()
    })
  }

  private initControls() {
    this.profileForm.get('email')?.disable();
    this.profileForm.get('password')?.disable();

    const contactNoControl = this.profileForm.get('contactNo');
    if (contactNoControl) {
      contactNoControl.valueChanges.subscribe(value => {
        if (value) {
          const isValid = /^\d{10}$/.test(value);
          contactNoControl.setErrors(isValid ? null : { 'invalidContactNo': true });
        }
      });
    }
    // const email = localStorage.getItem('email')!;
    // this.profileservice.profileupdate(email).subscribe(
    //   (userdata: any) => {
    //     this.user = userdata;
    //     console.log(this.user);
    //   },
    //   (error) => {
    //     console.error('error fetching details', error);
    //   }
    // )
  }
  private initForm() {
    this.profileForm = this.fb.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, Validators.required],
      firstName: [this.user.firstname, Validators.required],
      lastName: [this.user.lastname, Validators.required],
      gender: [this.user.ugender, Validators.required],
      houseNo: [this.user.houseno],
      streetName: [this.user.streetname],
      country: [this.user.Country, Validators.required],
      state: [this.user.state, Validators.required],
      city: [this.user.city, Validators.required],
      contactNo: [
        this.user.contactno,
        [
          Validators.required,
          Validators.pattern('[0-9]{10}')
        ],
        this.contactNoValidator.bind(this)
      ],
      userRole: [this.user.userRole]
    });
  }
  updateProfile() {
    if (this.profileForm.valid) {
      const updatedata = this.profileForm.value;
      const email = this.profileForm.get('email').value;

      this.profileservice.updateProfile(email, updatedata).subscribe(
        (Response: any) => {
          console.log('successfully', Response);
        },
        (error: any) => {
          console.error('error fetching details', error);
        }
      )
    }

  }

  onCountryChange() {
    const selectedCountry = this.profileForm.get('country')?.value;
    const statesForCountry = this.states[selectedCountry] || [];

    this.profileForm.get('state')?.setValue('');
    this.profileForm.get('city')?.setValue('');

    this.states[selectedCountry] = statesForCountry;
    const selectedStateControl = this.profileForm.get('state');
    if (selectedStateControl) {
      const selectedState = selectedStateControl.value;
      const citiesForState = this.cities[selectedState] || [];
      this.cities[selectedState] = citiesForState;
    }
  }

  onStateChange() {
    const selectedState = this.profileForm.get('state')?.value;
    const citiesForState = this.cities[selectedState] || [];
    this.profileForm.get('city')?.setValue('');
    this.cities[selectedState] = citiesForState;
  }

  contactNoInvalid(): boolean {
    const contactNoControl = this.profileForm.get('contactNo');
    return !!(
      contactNoControl &&
      (contactNoControl.invalid || (contactNoControl.value && !/^\d{10}$/.test(contactNoControl.value)))
    );
  }
  contactNoValidator(control: any): { [key: string]: any } | null {
    const value = control.value;

    if (value === '' || value === null) {
      return null;
    }

    const isValid = /^[0-9]*$/.test(value);

    if (isValid) {
      return null;
    } else {
      return { 'invalidContactNo': true };
    }
  }

}
