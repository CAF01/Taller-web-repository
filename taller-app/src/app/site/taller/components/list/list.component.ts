import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfoStudentComponent } from '../students/info-student/info-student.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  showInfoStudent() {
    {
      let modal = this.modalService.open(InfoStudentComponent, {
        centered: true,
        size:'lg'
      });
      modal.result;
    }
  }

}
