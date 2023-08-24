import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { ArenaDetailsFormComponent } from './components/arena-details-form/arena-details-form.component';
import { OwnerbookingsComponent } from './components/ownerbookings/ownerbookings.component';
import { BookingdetailsComponent } from './components/bookingdetails/bookingdetails.component';
import { SavingslotComponent } from './components/savingslot/savingslot.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GroundItemCardComponent } from './components/ground-item-card/ground-item-card.component';
import { GroundListComponentComponent } from './components/ground-list-component/ground-list-component.component';

import { AuthGuard, AuthorizationGuard, LoginGuard } from './services/auth/auth-guard.guard';
import { BookingConfirmationComponent } from './components/booking-confirmation/booking-confirmation.component';
import { GroundCompleteDetailComponent } from './components/ground-complete-detail/ground-complete-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [LoginGuard] },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: 'form', component: ArenaDetailsFormComponent, canActivate: [AuthGuard, AuthorizationGuard] },
  { path: 'ownerBookings', component: OwnerbookingsComponent, canActivate: [AuthGuard, AuthorizationGuard] },
  { path: 'playerBookings', component: BookingdetailsComponent, canActivate: [AuthGuard] },
  { path: 'saveSlots', component: SavingslotComponent, canActivate: [AuthGuard, AuthorizationGuard] },
  { path: 'grounds', component: HomeComponent },
  { path: 'profile', component: ProfileUpdateComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ground-list', component: GroundListComponentComponent, canActivate: [AuthGuard] },
  { path: 'ground-list/:sport', component: GroundItemCardComponent, canActivate: [AuthGuard] },
  { path: 'confirm', component: BookingConfirmationComponent, canActivate: [AuthGuard] },
  { path: 'detail', component: GroundCompleteDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
