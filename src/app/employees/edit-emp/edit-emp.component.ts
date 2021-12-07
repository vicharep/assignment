import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/shared/employees.service';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { DepartmentModel } from 'src/app/departments/department.model';
import { DepartmentsService } from 'src/app/shared/departments.service';
import { EmployeeModel } from '../employee.model';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  // @ViewChild('departList', { static: true })
  // departmentList!: ElementRef;

  dlist : DepartmentModel[] = [];
  emplist : EmployeeModel[] = [];

  ngAfterViewInit(){}

  constructor(private empService: EmployeesService,
              private depService: DepartmentsService,
              private route: ActivatedRoute) { }

  @ViewChild('editedfname')
  edtdfname!: ElementRef;

  @ViewChild('editedlname')
  edtdlname!: ElementRef;

  selectedDepart : string = '';
  fixedDpmt: string = '';

  ngOnInit(): void {
    this.dlist = this.depService.getDepartments();
  }

  editeddpmt(a:any){
    this.selectedDepart= a.target.value;
  }

  editEmployee(){
    this.fixedDpmt = this.selectedDepart;
    var empid =  +this.route.snapshot.params['id'];
    const fname = this.edtdfname.nativeElement.value;
    const lname = this.edtdlname.nativeElement.value;
    const dept = this.fixedDpmt; 
    this.empService.saveEditedEmpl( empid, fname, lname,dept);  
  }

}


