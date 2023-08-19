import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import your AppRoutingModule
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { SavingslotComponent } from './savingslot/savingslot.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { HeaderComponent } from './header/header.component';
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
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    ProfileUpdateComponent,
    BookingdetailsComponent,
    SavingslotComponent,
    LoginComponent,
    SignupComponent,
    ProfileUpdateComponent,
    ArenaDetailsFormComponent,
    OwnerbookingsComponent,
    HomeComponent,
    FilterComponent,
    BookingdetailsComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Import your AppRoutingModule
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,   
    MatCardModule,    
    MatExpansionModule,
    MatTabsModule,
    MatDatepickerModule,    
    MatProgressSpinnerModule,
   MatAutocompleteModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatCommonModule,
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
