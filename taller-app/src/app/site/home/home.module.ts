import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
// import { HomeComponent } from './components/home/home.component';
import { IconsModule } from 'src/app/icons/icons.module';
// import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IconsModule
  ]
})
export class HomeModule { }
