import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { NavbarPatientComponent } from './navbar-patient/navbar-patient.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import { SearchPatientComponent } from './search-patient/search-patient.component'
const myRoute:Routes=[
  {
    path:"",
    component:AddPatientComponent
  },{
    path:"view",
    component:ViewPatientComponent
  },{
    path:"search",
    component:SearchPatientComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    ViewPatientComponent,
    NavbarPatientComponent,
    SearchPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
