import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';
import { ButtonsComponent } from './demo/demo/buttons/buttons.component';

const routes: Routes = [
  
]

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
