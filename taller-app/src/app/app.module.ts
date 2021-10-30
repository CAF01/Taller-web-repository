import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
//Rutas principales
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IconsModule } from './icons/icons.module';
import { HomeComponent } from './site/home/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
