import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeeditComponent } from './employeeedit/employeeedit.component';
import { UpdateComponent } from './update/update.component';
import { HttpClientModule }    from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import {FormsModule} from "@angular/forms";
import { SignupformComponent } from './signupform/signupform.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeelistComponent,
    EmployeeeditComponent,
    UpdateComponent,
    ChildComponent,
    ParentComponent,
    SignupformComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
