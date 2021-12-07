import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { EditDepComponent } from './departments/edit-dep/edit-dep.component';
import { EditEmpComponent } from './employees/edit-emp/edit-emp.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'employees'},
  {path: 'employees', component: EmployeesComponent},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'edit-department/:id', component: EditDepComponent},
  {path: 'edit-emp/:id', component: EditEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
