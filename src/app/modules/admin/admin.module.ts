import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { CreatesurveyComponent } from './components/createsurvey/createsurvey.component';
import { SurveydashboardComponent } from './components/surveydashboard/surveydashboard.component';
import { SurveystatsComponent } from './components/surveystats/surveystats.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextAreaResizeDirective } from '../../directives/text-area-resize.directive';
import { QuestionComponent } from './components/createsurvey/sub-components/question/question.component';
import { TextanswerComponent } from './components/createsurvey/sub-components/textanswer/textanswer.component';
import { ScqanswerComponent } from './components/createsurvey/sub-components/scqanswer/scqanswer.component';
import { McqanswerComponent } from './components/createsurvey/sub-components/mcqanswer/mcqanswer.component';
import { NumberanswerComponent } from './components/createsurvey/sub-components/numberanswer/numberanswer.component';
import { FileanswerComponent } from './components/createsurvey/sub-components/fileanswer/fileanswer.component';


@NgModule({
  declarations: [
    AdminhomeComponent,
    CreatesurveyComponent,
    SurveydashboardComponent,
    SurveystatsComponent,
    TextAreaResizeDirective,
    QuestionComponent,
    TextanswerComponent,
    ScqanswerComponent,
    McqanswerComponent,
    NumberanswerComponent,
    FileanswerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
