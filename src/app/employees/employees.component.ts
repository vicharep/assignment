import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../shared/employees.service';
import { EmployeeModel } from './employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private empService : EmployeesService) { }

  ngOnInit(): void { 
    
  }

  ngOnChanges(): void{

    document.getElementById('depList')!.innerHTML ;
  }

  addEmployee(newfname:HTMLInputElement, newlname: HTMLInputElement, depSelect: HTMLInputElement){
    this.empService.addEmpl( newfname.value, newlname.value, depSelect.value);
  } 

  

}
