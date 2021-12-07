import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DepartmentsService } from './shared/departments.service';
import { EmployeesService } from './shared/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'work-assignment';

  constructor(){}

}
