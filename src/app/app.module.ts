import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeProjectsComponent } from './employee/employee-projects/employee-projects.component';
import { LoginTestComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CapitalizedPipe } from './Pipes/capitalized.pipe';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BtableComponent } from './components/btable/btable.component';
import { FormbuilderComponent } from './FormBuilder/formbuilder/formbuilder.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    EmployeeComponent,
    EmployeeProjectsComponent,
    LoginTestComponent,
    CapitalizedPipe,
    ReactiveFormComponent,
    BtableComponent,
    FormbuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
