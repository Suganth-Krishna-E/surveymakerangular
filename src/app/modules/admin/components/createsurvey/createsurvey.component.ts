import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  styleUrl: './createsurvey.component.css'
})
export class CreatesurveyComponent {
  createSurveyFormGroup: FormGroup;
  constructor() {
    this.createSurveyFormGroup = new FormGroup({
      title: new FormControl('', []),
      description: new FormControl('', []),
      questions: new FormArray([]),  
    });

  }

  get questions() {
    return (this.createSurveyFormGroup.get('questions') as FormArray);
  }

  addQuestion() {
    const questionGroup = new FormGroup({
      questionType: new FormControl('', []),  
      questionText: new FormControl('', []),
      questionAnswer: new FormGroup({})
    });

    this.questions.push(questionGroup);  
  }

  copyQuestion(index: number) {
    const questionGroup = this.questions.at(index);

    this.questions.insert(index + 1, questionGroup);
  }

  deleteQuestion(index: number) {
    this.questions.removeAt(index);
  }

  onSubmitCreateSurvey() {
    console.log(this.createSurveyFormGroup.value); 
  }

}
