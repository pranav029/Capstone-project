import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { ArenaDetailsFormComponent } from './components/arena-details-form/arena-details-form.component';
import { OwnerbookingsComponent } from './ownerbookings/ownerbookings.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { SavingslotComponent } from './savingslot/savingslot.component';

import { HomeComponent } from './components/home/home.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './services/auth-guard.guard';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: 'form', component: ArenaDetailsFormComponent, canActivate: [AuthGuard] },
  { path: 'ownerBookings', component: OwnerbookingsComponent, canActivate: [AuthGuard] },
  { path: 'playerBookings', component: BookingdetailsComponent, canActivate: [AuthGuard] },
  { path: 'saveSlots', component: SavingslotComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileUpdateComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
