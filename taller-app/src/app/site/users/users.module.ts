import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { NewUserComponent } from './components/users/new-user/new-user.component';
import { ListComponent } from './components/users/list/list.component';
import { UpdateComponent } from './components/users/update/update.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { AutoUpdateComponent } from './components/auto-update/auto-update.component';


@NgModule({
  declarations: [
  
        NewUserComponent,
       ListComponent,
       UpdateComponent,
       AutoUpdateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    IconsModule
  ]
})
export class UsersModule { }
