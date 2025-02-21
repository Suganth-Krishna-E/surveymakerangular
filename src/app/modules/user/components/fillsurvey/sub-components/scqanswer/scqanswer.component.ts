import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-scqanswer',
  templateUrl: './scqanswer.component.html',
  styleUrl: './scqanswer.component.css'
})
export class ScqanswerComponent {
  @Input() answerFormGroup!: FormGroup;


  get optionsFromArray(): FormArray {
    return this.answerFormGroup.controls['options'] as FormArray;
  }

  getCurrentOptionControl(index: number): FormControl {
    return this.optionsFromArray.at(index) as FormControl;
  }
}
