import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { FillsurveyComponent } from './components/fillsurvey/fillsurvey.component';


@NgModule({
  declarations: [
    UserhomeComponent,
    FillsurveyComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
