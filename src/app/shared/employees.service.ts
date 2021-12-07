import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentModel } from '../departments/department.model';
import { EmployeeModel } from '../employees/employee.model';
import { DepartmentsService } from './departments.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

 public departList : DepartmentModel[] = [];
 
  constructor(private depService: DepartmentsService,
              private router: Router) {}

  empList : EmployeeModel[] = [
    { firstName: 'Raj',lastName: 'Patil', department: 'Finance'},
    { firstName: 'Jai' , lastName: 'Sawant', department: 'IT'}
  ];

  getEmployees(): EmployeeModel[]{
    return this.empList;
  }

  delEmp(m:number){
    this.empList.splice(m,1);
    this.router.navigate(['employees']);
  }

  addEmp(fname:string,lname:string,depart:string){

    const newemp = { firstName: fname,
                      lastName: lname, 
                      department: depart}
              
    this.empList.push(newemp);
  }

  saveEditedEmpl(emid:number,fname: string ,lname: string ,depart: string){
    const savedEmpl = { firstName: fname, 
                        lastName: lname, 
                        department: depart};

    this.empList[emid] = savedEmpl;
      alert('Employee changes saved successfully');
      this.router.navigate(['employees']);
  }


}

