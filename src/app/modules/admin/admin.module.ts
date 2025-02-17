import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { CreatesurveyComponent } from './components/createsurvey/createsurvey.component';
import { SurveydashboardComponent } from './components/surveydashboard/surveydashboard.component';
import { SurveystatsComponent } from './components/surveystats/surveystats.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminhomeComponent,
    CreatesurveyComponent,
    SurveydashboardComponent,
    SurveystatsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
