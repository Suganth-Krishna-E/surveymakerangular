import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { CreatesurveyComponent } from './components/createsurvey/createsurvey.component';
import { SurveydashboardComponent } from './components/surveydashboard/surveydashboard.component';
import { SurveystatsComponent } from './components/surveystats/surveystats.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextAreaResizeDirective } from '../../directives/text-area-resize.directive';


@NgModule({
  declarations: [
    AdminhomeComponent,
    CreatesurveyComponent,
    SurveydashboardComponent,
    SurveystatsComponent,
    TextAreaResizeDirective
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
