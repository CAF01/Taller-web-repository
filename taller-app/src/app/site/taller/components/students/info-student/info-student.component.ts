import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info-student',
  templateUrl: './info-student.component.html',
  styleUrls: ['./info-student.component.css']
})
export class InfoStudentComponent implements OnInit {

  @Input() numModal:number=0;
  @Input() message?:string;

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}
}
