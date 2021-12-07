import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DepartmentModel } from '../departments/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private router: Router) { }

   departmentList : DepartmentModel[]  = [
    {  name: 'Finance' },
    {  name: 'IT'},
    {  name: 'HR'}   
   ];

   departmentsChanged = new Subject<DepartmentModel[]>();
   dep : DepartmentModel = { name: ''};

   getDepartments(): DepartmentModel[]{
     return this.departmentList;
   }

   editDep(i:number){
     this.router.navigate(['edit-department', i]);
   }

   saveEditedDep(m:number,n:string){
      var savedep = { name: n};
      this.departmentList[m] = savedep;
      alert('Changes saved successfully');
      this.router.navigate(['departments']);
   }

   delDep(d:number){
     this.departmentList.splice(d,1);
     this.router.navigate(['departments']);
   }

   addDepartments(deps: string) {
   var depps = {name: deps};
    this.departmentList.push(depps);
   this.departmentsChanged.next(this.departmentList.slice());
  }
  
}
