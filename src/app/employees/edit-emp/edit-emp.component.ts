import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/shared/employees.service';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  @ViewChild('departList', { static: true })
  departmentList!: ElementRef;

  ngAfterViewInit(){
    
  }


  constructor(private empService: EmployeesService,
              private route: ActivatedRoute) { }

  public empDetail: {
    editedfname: string ,
    editedlname: string
  } = {
    editedfname : '',
    editedlname: ''
  }

  


  ngOnInit(): void {

    this.empService.updDepartOptions();

    var empid : number = +this.route.snapshot.params['id'];
      this.empDetail.editedfname = this.empService.empList[empid].firstName;
      this.empDetail.editedlname = this.empService.empList[empid].lastName;
  }

  editEmployee( fname: HTMLInputElement, lname: HTMLInputElement){

    var empid =  +this.route.snapshot.params['id'];
    var a = this.departmentList.nativeElement.selectedValue;
    //var a = (<HTMLInputElement>document.getElementById('departList')).value;
    this.empService.saveEditedEmpl(empid, fname.value, lname.value,a)

   // var selectEle = document.querySelector('#depSelec');
   // var output = selectEle!.ariaValueNow;

   //var ddown = document.getElementsByName("depSelec");

   //let i:number = 0;
   //for (i= 0; i < ddown.length; i++) {
   //  sdvalues.push(ddown[i].options[ddown[i].selectedIndex].value);
   //}

   //var selDep= document.getElementById("depSelec");
   //var selectedText = depSelec.options[depSelec.selectedIndex].innerHTML;
   //var selectedValue = depSelec.value;

    
    //this.empService.saveEditedEmpl(empid, fname.value, lname.value, selectedValue);
  }

}


