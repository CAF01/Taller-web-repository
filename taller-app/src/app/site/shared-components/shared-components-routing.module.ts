import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SharedComponentsComponent } from './shared-components.component';

const routes: Routes = [{ path: '',  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedComponentsRoutingModule { }
