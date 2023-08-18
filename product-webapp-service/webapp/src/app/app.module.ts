import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { ArenaDetailsFormComponent } from './components/arena-details-form/arena-details-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http'
import { GroundDetailService } from './services/GroundDetailService';
import { GroundDetailServiceImpl } from './services/GroundDetailServiceImpl';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeComponent } from './components/home/home.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCommonModule} from '@angular/material/core';
import { FilterComponent } from './components/filter/filter.component';
import {MatCardModule} from '@angular/material/card';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
// import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    ArenaDetailsFormComponent,
    HomeComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
   MatAutocompleteModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatCardModule,
    MatCommonModule,
    MatCardModule
  ],
  providers: [{ provide: GroundDetailService, useClass: GroundDetailServiceImpl }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
