import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import your AppRoutingModule
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingdetailsComponent } from './components/bookingdetails/bookingdetails.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { SavingslotComponent } from './components/savingslot/savingslot.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { HeaderComponent } from './components/header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';
import { OwnerbookingsComponent } from './components/ownerbookings/ownerbookings.component';
import { ArenaDetailsFormComponent } from './components/arena-details-form/arena-details-form.component';
import { GroundDetailService } from './services/groundDetails/GroundDetailService';
import { GroundDetailServiceImpl } from './services/groundDetails/GroundDetailServiceImpl';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeComponent } from './components/home/home.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCommonModule } from '@angular/material/core';
import { FilterComponent } from './components/filter/filter.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GroundItemCardComponent } from './components/ground-item-card/ground-item-card.component';
import { GroundListComponentComponent } from './components/ground-list-component/ground-list-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookingConfirmationComponent } from './components/booking-confirmation/booking-confirmation.component';
import { GroundCompleteDetailComponent } from './components/ground-complete-detail/ground-complete-detail.component';

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
    GroundItemCardComponent,
    GroundListComponentComponent,
    FooterComponent,
    BookingConfirmationComponent,
    GroundCompleteDetailComponent
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
    MatNativeDateModule,
  ],
  providers: [{provide:GroundDetailService,useClass:GroundDetailServiceImpl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
