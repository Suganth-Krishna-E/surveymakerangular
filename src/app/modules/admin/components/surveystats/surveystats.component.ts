import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-surveystats',
  templateUrl: './surveystats.component.html',
  styleUrl: './surveystats.component.css',
})
export class SurveystatsComponent {
  surveyIdGroup: FormGroup;
  surveyDetails!: surveyDetail;

  surveyResponse: Response[] = [];

  constructor(private surveyService: SurveyService) {
    this.surveyIdGroup = new FormGroup({
      surveyId: new FormControl(),
    });
  }

  getSurveyById() {
    
    this.surveyService
      .getSurveyDetailsBySurveyId(this.surveyIdGroup.controls['surveyId'].value)
      .subscribe({
        next: (surveyDetail) => {
          this.surveyDetails = surveyDetail;
        },
      });

    this.surveyService
      .getSurveyResponsesBySurveyId(this.surveyIdGroup.controls['surveyId'].value)
      .subscribe({
        next: (responses) => {
          this.surveyResponse = responses;
        },
      });
  }

  getNonNullAnswer(answer: Answer) {
    if(answer.answerFile !== null) {
      return answer.answerFile;
    }
    else if(answer.answerText !== null) {
      return answer.answerText;
    }
    else if(answer.answerNumber !== null) {
      return answer.answerNumber;
    }
    else if(answer.answerMcq !== null) {
      return answer.answerMcq;
    }
    else {
      return answer.answerScq;
    }
  }
}

interface Response {
  responseId: string,
  surveyId: string,
  userId: string,
  answers: Answer[]
}

interface Answer {
  questionId: string,
  answerText: string,
  answerNumber: number,
  answerScq: string,
  answerMcq: string[],
  answerFile: string
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

