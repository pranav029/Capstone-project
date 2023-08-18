// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArenaDetailsFormComponent } from './components/arena-details-form/arena-details-form.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: 'form', component: ArenaDetailsFormComponent },
  { path: "", redirectTo: "/form", pathMatch: "full" },
  {path: "home", component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
