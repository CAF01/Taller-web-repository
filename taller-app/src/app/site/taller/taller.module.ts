import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TallerRoutingModule } from './taller-routing.module';
import { ListComponent } from './components/list/list.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { InfoStudentComponent } from './components/students/info-student/info-student.component';


@NgModule({
  declarations: [
    ListComponent,
    InfoStudentComponent
  ],
  imports: [
    CommonModule,
    TallerRoutingModule,
    IconsModule
  ]
})
export class TallerModule { }
