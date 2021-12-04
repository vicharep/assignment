import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentModel } from '../departments/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private router: Router) { }

  public  departmentList : DepartmentModel[]  = [
    { id: 1, name: 'Finance' },
    { id: 2, name: 'IT'},
    { id: 3, name: 'HR'}
   ];

   updDepartList(){
      let i: number;
      let str:string = '';

      for(i=0; i < this.departmentList.length; i++ ){
        str += '<li>' + this.departmentList[i].name  + '</li>' + '<button (click)="editDep(i)">Edit</button>';
      }
      let st: any = document.getElementById('department');
      st.innerHTML = str;
   }

   addDep(newD:string){
      let idDep = this.departmentList[this.departmentList.length-1].id;
      this.departmentList.push({ id: ++idDep, name: newD});
   }

   editDep(i:number){
     this.router.navigate(['edit-department', i]);
   }

   saveEditedDep(j:number, n:string){
      this.departmentList[j].name = n;
      alert('Changes saved successfully');
      this.router.navigate(['departments']);

   }
  
}
