import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { EditDepComponent } from './departments/edit-dep/edit-dep.component';
import { EditEmpComponent } from './employees/edit-emp/edit-emp.component';
import { FormsModule } from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [  
    AppComponent,
    DepartmentsComponent,
    EmployeesComponent,
    EditDepComponent,
    EditEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  exports: [MatSidenavModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
