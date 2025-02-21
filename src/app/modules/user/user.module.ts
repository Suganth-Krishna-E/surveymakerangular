import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FillsurveyComponent } from './components/fillsurvey/fillsurvey.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { QuestionComponent } from './components/fillsurvey/sub-components/question/question.component';
import { FileanswerComponent } from './components/fillsurvey/sub-components/fileanswer/fileanswer.component';
import { McqanswerComponent } from './components/fillsurvey/sub-components/mcqanswer/mcqanswer.component';
import { NumberanswerComponent } from './components/fillsurvey/sub-components/numberanswer/numberanswer.component';
import { ScqanswerComponent } from './components/fillsurvey/sub-components/scqanswer/scqanswer.component';
import { TextanswerComponent } from './components/fillsurvey/sub-components/textanswer/textanswer.component';


@NgModule({
  declarations: [
    FillsurveyComponent,
    UserhomeComponent,
    QuestionComponent,
    FileanswerComponent,
    McqanswerComponent,
    NumberanswerComponent,
    ScqanswerComponent,
    TextanswerComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    RouterOutlet
  ]
})
export class UserModule { }
