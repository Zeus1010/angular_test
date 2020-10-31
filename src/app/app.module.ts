 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    EmpFormComponent,
    EmpDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    FormsModule,                               
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
