import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoUpdateComponent } from './components/auto-update/auto-update.component';
import { ListComponent } from './components/users/list/list.component';
import { NewUserComponent } from './components/users/new-user/new-user.component';
import { UpdateComponent } from './components/users/update/update.component';

const routes: Routes = [{ path: 'new-user',component:NewUserComponent },
{path:'list-users',component:ListComponent},
{path:'update-user',component:UpdateComponent},
{path:'settings',component:AutoUpdateComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
