import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { SurveyService } from '../../../admin/services/survey.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fillsurvey',
  templateUrl: './fillsurvey.component.html',
  styleUrl: './fillsurvey.component.css',
})
export class FillsurveyComponent {
  userName!: string;

  surveyIdFormGroup: FormGroup;
  surveyDetail!: SurveyDetail;
  surveyDetailFormGroup: FormGroup;

  ngOnInit() {
    this.userName = this.route.parent?.snapshot.paramMap.get('id') || '';
  }

  constructor(private surveyService: SurveyService, private route: ActivatedRoute, private router: Router) {
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

  get questions() {
    return this.surveyDetailFormGroup.controls['questions'] as FormArray;
  }

  getFormControl(index: number) {
    return this.questions.controls[index] as FormGroup;
  }

  fillSurveyDetailFormGroup() {
    this.surveyDetailFormGroup.controls['surveyId'].setValue(this.surveyDetail.surveyId);
    this.surveyDetailFormGroup.controls['title'].setValue(this.surveyDetail.title);
    this.surveyDetailFormGroup.controls['description'].setValue(this.surveyDetail.description);

    const questionsArray = this.surveyDetailFormGroup.get('questions') as FormArray;

    this.surveyDetail.questions.forEach((question: QuestionSurveyDetail) => {
      let newQuestion: FormGroup;

      if (question.type === 'file') {
        newQuestion = new FormGroup({
          questionNumber: new FormControl(question.questionNumber),
          title: new FormControl(question.title),
          type: new FormControl(question.type),
          fileType: new FormControl(question.fileType),
          answer: new FormControl()
        });
      } else if (question.type === 'scq') {
        newQuestion = new FormGroup({
          questionNumber: new FormControl(question.questionNumber),
          title: new FormControl(question.title),
          type: new FormControl(question.type),
          options: new FormArray([]),
          answer: new FormControl()
        });

        const newAnswerOptions = this.getOptionsFormArray(newQuestion);
        question.options.forEach(option => {
          newAnswerOptions.push(new FormControl(option));
        });
      } else if (question.type === 'text') {
        newQuestion = new FormGroup({
          questionNumber: new FormControl(question.questionNumber),
          title: new FormControl(question.title),
          type: new FormControl(question.type),
          answer: new FormControl()
        });
      } else if (question.type === 'numeric') {
        newQuestion = new FormGroup({
          questionNumber: new FormControl(question.questionNumber),
          title: new FormControl(question.title),
          type: new FormControl(question.type),
          answer: new FormControl()
        });
      } else if (question.type === 'mcq') {
        newQuestion = new FormGroup({
          questionNumber: new FormControl(question.questionNumber),
          title: new FormControl(question.title),
          type: new FormControl(question.type),
          options: new FormArray([]),
          answer: new FormArray([])
        });

        question.options.forEach(option => {
          this.getOptionsFormArray(newQuestion).push(new FormControl(option));
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

  subtmitResponse() {
    const mappedSurvey = this.mapSurvey(this.surveyDetailFormGroup.value, this.userName);
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }

  mapSurvey(input: SurveyInput, userId: string): SurveyOutput {
    const answers: Answer[] = input.questions.map(q => {
        const answer: Answer = { questionId: `${q.questionNumber}` };
  
        switch (q.type) {
            case "text":
                answer.answerText = q.answer;
                break;
            case "numeric":
                answer.answerNumber = q.answer;
                break;
            case "scq":
                answer.answerScq = q.answer;
                break;
            case "mcq":
                if (q.answer && Array.isArray(q.answer) && q.options) {
                    answer.answerMcq = q.options.filter((_, index) => q.answer[index]);
                }
                break;
            case "file":
                answer.answerFile = q.answer;
                break;
        }
        return answer;
    });
  
    return {
        surveyId: input.surveyId,
        userId,
        answers
    };
  }
  
}

interface SurveyInput {
  surveyId: string;
  title: string;
  description: string;
  questions: Question[];
}

interface Question {
  questionNumber: string;
  title: string;
  type: string;
  answer?: any;
  options?: string[];
  fileType?: string;
}

interface SurveyOutput {
  surveyId: string;
  userId: string;
  answers: Answer[];
}

interface Answer {
  questionId: string;
  answerText?: string;
  answerNumber?: number;
  answerScq?: string;
  answerMcq?: string[];
  answerFile?: string;
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
