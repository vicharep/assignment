import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../shared/departments.service';
//import { DepartmentModel } from './department.model';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  //newDepartment: string ="";

  constructor(private depService: DepartmentsService) {}

  ngOnInit(): void {   
  }

  ngOnChanges(){
    this.depService.updDepartList();
   }

  addDepartment(newDep: HTMLInputElement){
    this.depService.addDep(newDep.value);
  }

}
