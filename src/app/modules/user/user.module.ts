import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FillsurveyComponent } from './components/fillsurvey/fillsurvey.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    FillsurveyComponent,
    UserhomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    RouterOutlet
  ]
})
export class UserModule { }
