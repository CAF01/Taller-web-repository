import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './site/home/components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
  { path: 'home', 
  component:HomeComponent,
  children:
  [
      { path: 'users', loadChildren: () => import('./site/users/users.module').then(m => m.UsersModule) },
      { path:'dashboard',loadChildren:()=>import('./site/home/home.module').then((m)=>m.HomeModule)},
      { path: 'taller', loadChildren: () => import('./site/taller/taller.module').then(m => m.TallerModule) },
      
  ]
  },
  { path: 'login', loadChildren: () => import('./site/account/account.module').then(m => m.AccountModule) },
  
  

  // { path: 'shared-components', loadChildren: () => import('./site/shared-components/shared-components.module').then(m => m.SharedComponentsModule) }

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
