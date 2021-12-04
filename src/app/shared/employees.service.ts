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
              private router: Router) { }

  ngOnInit(){
    this.departList = this.depService.departmentList;
  }
  

  empList : EmployeeModel[] = [
    { empId: 1, firstName: 'Pooja',lastName: 'Vichare', department: 'Finance'},
    { empId: 2, firstName: 'Jai' , lastName: 'Chavan', department: 'IT'}
  ];

  updEmployeeList(){
    let i: number;
    let str:string = '';
  
    for(i=0; i < this.empList.length; i++ ){
      str += '<tr><th>' + this.empList[i].firstName + '</th><th>' + 
              this.empList[i].lastName + '</th><th>' + this.empList[i].department + '</th></tr>' + 
              '<button (click)="editEmp(i)">Edit</button>';
    }
    let st: any = document.getElementById('employee');
    st.innerHTML = str;
  }

  updDepartOptions(){
    let j:number;
    let radiobuttons: string = "";

    for(j=0; j < this.departList.length; j++){
        radiobuttons += '<input type="radio" id="' + j + 'value="'+ this.departList[j].name +
                         '"><label for="' + j + '">' + this.departList[j].name + '</label>';
    }

    let st: any = document.getElementById('departList');
      st.innerHTML = radiobuttons;

  }

  addEmpl(fname: string, lname:string, dep:string){
    let idEmp = this.empList[this.empList.length-1].empId;
    this.empList.push({ empId: ++idEmp, firstName: fname, lastName: lname, department: dep});
  }

  editEmp(i: number){

  }

  saveEditedEmpl(emid: number,fname: string ,lname: string ,depart: string){
    this.empList[emid].firstName = fname;

      alert('Employee changes saved successfully');
      this.router.navigate(['employees']);
  }


}

