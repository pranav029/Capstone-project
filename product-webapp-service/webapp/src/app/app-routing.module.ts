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

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [LoginGuard] },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: 'form', component: ArenaDetailsFormComponent, canActivate: [AuthGuard, AuthorizationGuard] },
  { path: 'ownerBookings', component: OwnerbookingsComponent, canActivate: [AuthGuard, AuthorizationGuard] },
  { path: 'playerBookings', component: BookingdetailsComponent, canActivate: [AuthGuard] },
  { path: 'saveSlots', component: SavingslotComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileUpdateComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ground-list', component: GroundListComponentComponent },
  { path: 'ground-list/:sport', component: GroundItemCardComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
