import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArenaDetailsFormComponent } from './components/arena-details-form/arena-details-form.component';

const routes: Routes = [
  { path: 'form', component: ArenaDetailsFormComponent },
  { path: "", redirectTo: "/form", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
