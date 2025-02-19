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
    return this.createSurveyFormGroup.get('questions') as FormArray;
  }

  addQuestion() {
    const questionGroup = new FormGroup({
      questionNumber: new FormControl(),
      type: new FormControl(),  
      title: new FormControl(),
      options: new FormArray([]),
      fileType: new FormControl()
    });

    this.questions.push(questionGroup);  
  }

  getFormControl(index: number) {
    return this.questions.controls[index] as FormGroup;
  }

  copyQuestion(index: number) {
    const questionGroup = this.questions.at(index);

    this.questions.insert(index + 1, questionGroup);
  }

  deleteQuestion(index: number) {
    this.questions.removeAt(index);
  }

  onSubmitCreateSurvey() {
    // this.createSurveyFormGroup.controls
    this.questions.controls.forEach((question, index) => {
      (question as FormGroup).get('questionNumber')?.setValue(index + 1);
    });
    console.log(this.createSurveyFormGroup); 
  }

  trackByFn(index: number, item: any) {
    return item.id; 
  }
  

}
