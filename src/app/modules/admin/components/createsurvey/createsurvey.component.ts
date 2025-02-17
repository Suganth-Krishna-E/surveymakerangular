import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { TextAreaResizeDirective } from '../../../../directives/text-area-resize.directive';

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
}
