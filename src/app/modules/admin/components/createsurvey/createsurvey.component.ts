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

  onSubmitCreateSurvey() {
    console.log(this.createSurveyFormGroup);
  }

  addQuestion() {
    console.log("add question");
  }
}
