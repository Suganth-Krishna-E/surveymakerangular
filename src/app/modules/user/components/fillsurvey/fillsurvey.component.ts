import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { SurveyService } from '../../../admin/services/survey.service';

@Component({
  selector: 'app-fillsurvey',
  templateUrl: './fillsurvey.component.html',
  styleUrl: './fillsurvey.component.css',
})
export class FillsurveyComponent {
  surveyIdFormGroup: FormGroup;
  surveyDetail!: SurveyDetail;
  surveyDetailFormGroup: FormGroup;

  constructor(private surveyService: SurveyService) {
    this.surveyIdFormGroup = new FormGroup({
      surveyId: new FormControl(),
    });

    this.surveyDetailFormGroup = new FormGroup({
      surveyId: new FormControl(),
      title: new FormControl(),
      description: new FormControl(),
      questions: new FormArray([]),
    });
  }

  getSurveyById() {
    this.surveyService
      .getSurveyDetailsBySurveyId(this.surveyIdFormGroup.controls['surveyId'].value)
      .subscribe({
        next: (surveyDetail) => {
          this.surveyDetail = surveyDetail;
          this.fillSurveyDetailFormGroup();
        },
      });
  }

  fillSurveyDetailFormGroup() {
    this.surveyDetailFormGroup.controls['surveyId'].setValue(this.surveyDetail.surveyId);
    this.surveyDetailFormGroup.controls['title'].setValue(this.surveyDetail.title);
    this.surveyDetailFormGroup.controls['description'].setValue(this.surveyDetail.description);

    const questionsArray = this.surveyDetailFormGroup.get('questions') as FormArray;
    questionsArray.clear();

    this.surveyDetail.questions.forEach((question: QuestionSurveyDetail) => {
      let newQuestion: FormGroup;

      if (question.type === 'file') {
        newQuestion = new FormGroup({
          questionNumber: new FormControl(question.questionNumber),
          title: new FormControl(question.title),
          type: new FormControl(question.type),
          fileType: new FormControl(question.fileType),
        });
      } else if (question.type === 'scq') {
        newQuestion = new FormGroup({
          questionNumber: new FormControl(question.questionNumber),
          title: new FormControl(question.title),
          type: new FormControl(question.type),
          options: new FormControl(question.options),
        });
      } else if (question.type === 'text') {
        newQuestion = new FormGroup({
          questionNumber: new FormControl(question.questionNumber),
          title: new FormControl(question.title),
          type: new FormControl(question.type),
        });
      } else if (question.type === 'numeric') {
        newQuestion = new FormGroup({
          questionNumber: new FormControl(question.questionNumber),
          title: new FormControl(question.title),
          type: new FormControl(question.type),
        });
      } else if (question.type === 'mcq') {
        newQuestion = new FormGroup({
          questionNumber: new FormControl(question.questionNumber),
          title: new FormControl(question.title),
          type: new FormControl(question.type),
          options: new FormArray([]),
        });

        const optionsArray = this.getOptionsFormArray(newQuestion);
        question.options.forEach(option => {
          optionsArray.push(new FormControl(option));
        });
      } else {
        return; 
      }

      questionsArray.push(newQuestion);
    });
  }

  getOptionsFormArray(newQuestion: FormGroup): FormArray {
    return newQuestion.get('options') as FormArray;
  }
}

interface SurveyDetail {
  surveyId: string;
  title: string;
  description: string;
  questions: QuestionSurveyDetail[];
}

interface QuestionSurveyDetail {
  questionNumber: number;
  title: string;
  type: string;
  fileType?: string;
  options: string[];
  notes?: string;
}
