import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentsService } from '../shared/departments.service';
import { DepartmentModel } from './department.model';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  @ViewChild('newDepartment')
  newItem!: ElementRef; 

  dlist: DepartmentModel[] = [];

  constructor(private depService: DepartmentsService,
              private route: Router) {}

  ngOnInit(){
    this.dlist = this.depService.getDepartments();
    this.depService.departmentsChanged.subscribe(
      (departList: DepartmentModel[]) => {
        this.dlist = departList;
      });
  } 

  deleteDep(d:number){
    this.depService.delDep(d);
  }

  addItem(){
    const item = this.newItem.nativeElement.value;
    this.depService.addDepartments(item);
  }

  editDepartment(i:number){
    this.route.navigate(['edit-department', i]);
  }

}
