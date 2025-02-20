import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SurveyService } from '../../../admin/services/survey.service';

@Component({
  selector: 'app-fillsurvey',
  templateUrl: './fillsurvey.component.html',
  styleUrl: './fillsurvey.component.css',
})
export class FillsurveyComponent {
  surveyIdFormGoup: FormGroup;
  surveyDetail!: surveyDetail;

  constructor(private surveyService: SurveyService) {
    this.surveyIdFormGoup = new FormGroup({
      surveyId: new FormControl(),
    });
  }

  getSurveyById() {
    this.surveyService
      .getSurveyDetailsBySurveyId(
        this.surveyIdFormGoup.controls['surveyId'].value
      )
      .subscribe({
        next: (surveyDetail) => {
          this.surveyDetail = surveyDetail;
          console.log(surveyDetail);
        },
      });
  }
}

interface surveyDetail {
  title: string;
  description: string;
  questions: questioSurveyDetail[];
}

interface questioSurveyDetail {
  questionNumber: number;
  title: string;
  type: string;
  fileType: string;
  options: string[];
  notes: string;
}
