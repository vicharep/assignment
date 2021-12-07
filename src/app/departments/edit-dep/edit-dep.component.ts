import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsService } from 'src/app/shared/departments.service';

@Component({
  selector: 'app-edit-dep',
  templateUrl: './edit-dep.component.html',
  styleUrls: ['./edit-dep.component.css']
})
export class EditDepComponent implements OnInit {
  depId: number = 0;

  @ViewChild('editedName')
  editeddep!: ElementRef;

  constructor(private depService: DepartmentsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.depId = +this.route.snapshot.params['id'];
  }

  editDepartment(){
    const newdep = this.editeddep.nativeElement.value;
    this.depService.saveEditedDep(this.depId,newdep);
  }

}
