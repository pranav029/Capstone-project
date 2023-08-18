import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ArenaDetailsFormComponent } from './components/arena-details-form/arena-details-form.component';
import { OwnerbookingsComponent } from './ownerbookings/ownerbookings.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { SavingslotComponent } from './savingslot/savingslot.component';

import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'form', component: ArenaDetailsFormComponent },
  { path: 'ownerBookings', component: OwnerbookingsComponent},
  { path:'playerBookings', component: BookingdetailsComponent },
  { path:'saveSlots', component: SavingslotComponent},
  {path: "home", component:HomeComponent},
  { path: "", redirectTo: "/form", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
