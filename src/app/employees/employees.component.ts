import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentModel } from '../departments/department.model';
import { DepartmentsService } from '../shared/departments.service';
import { EmployeesService } from '../shared/employees.service';
import { EmployeeModel } from './employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private empService : EmployeesService,
              private depService : DepartmentsService,
              private router: Router) { }

  emList : EmployeeModel[] = [];
  dlist : DepartmentModel[] = [];
  selecteddepart: string= '';

    @ViewChild('newfname')
  fname!: ElementRef;

    @ViewChild('newlname')
  lname!: ElementRef;

  ngOnInit(): void {
    this.dlist = this.depService.getDepartments();
    this.emList = this.empService.getEmployees();
  }

  update(e: any){
    this.selecteddepart = e.target.value ;
  }

  editEmp(k:number){
    this.router.navigate(['edit-emp', k]);
  }

  deleteEmp(j:number){
    this.empService.delEmp(j);
  }

  addEmployee(){
    const fn = this.fname.nativeElement.value;
    const ln = this.lname.nativeElement.value;
    const dp = this.selecteddepart;
    this.empService.addEmp(fn,ln,dp); 
  }
}
