import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TallerRoutingModule } from './taller-routing.module';
import { ListComponent } from './components/list/list.component';
import { IconsModule } from 'src/app/icons/icons.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    TallerRoutingModule,
    IconsModule
  ]
})
export class TallerModule { }
