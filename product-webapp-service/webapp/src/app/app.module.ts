import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
<<<<<<< HEAD

import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';

import { SavingslotComponent } from './savingslot/savingslot.component';
import { MatDatepickerModule } from '@angular/material/datepicker';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { OwnerbookingsComponent } from './ownerbookings/ownerbookings.component';

import { ArenaDetailsFormComponent } from './components/arena-details-form/arena-details-form.component';

import { GroundDetailService } from './services/GroundDetailService';
import { GroundDetailServiceImpl } from './services/GroundDetailServiceImpl';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeComponent } from './components/home/home.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCommonModule} from '@angular/material/core';
import { FilterComponent } from './components/filter/filter.component';




=======
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs'
>>>>>>> 513b862c87b86e4c6408fcaaafe957493fb0bb82

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    BookingdetailsComponent,
    SavingslotComponent,
    LoginComponent,
    SignupComponent,
    ProfileUpdateComponent,
    ArenaDetailsFormComponent,
    OwnerbookingsComponent,
    HomeComponent,
    FilterComponent,
=======
>>>>>>> 513b862c87b86e4c6408fcaaafe957493fb0bb82
    BookingdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
<<<<<<< HEAD
    MatTabsModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressSpinnerModule,
   MatAutocompleteModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatCommonModule
   
=======
    MatTabsModule
>>>>>>> 513b862c87b86e4c6408fcaaafe957493fb0bb82
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
