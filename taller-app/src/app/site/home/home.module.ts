import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { IconsModule } from 'src/app/icons/icons.module';


@NgModule({
  declarations: [
  
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IconsModule
  ]
})
export class HomeModule { }
