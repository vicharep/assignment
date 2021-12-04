import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsService } from 'src/app/shared/departments.service';

@Component({
  selector: 'app-edit-dep',
  templateUrl: './edit-dep.component.html',
  styleUrls: ['./edit-dep.component.css']
})
export class EditDepComponent implements OnInit {
  depId: number = 0;
  depName: string = "";

  constructor(private depService: DepartmentsService,
              private route: ActivatedRoute) { }


  ngOnInit(): void {
     var depId = +this.route.snapshot.params['id'];
     var depName = this.depService.departmentList[depId].name;
  }

  editDepartment(editedName: HTMLInputElement){
    this.depService.saveEditedDep(this.depId, editedName.value );
  }

}
