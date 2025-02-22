import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-scqanswer',
  templateUrl: './scqanswer.component.html',
  styleUrl: './scqanswer.component.css'
})
export class ScqanswerComponent {
  @Input() answerFormGroup!: FormGroup;

  optionValue!: string[];

  ngOnInit() {
    this.optionValue = this.answerFormGroup.controls['options'].value;
  }

  get optionsFromArray(): FormArray {
    return this.answerFormGroup.controls['options'] as FormArray;
  }

  getLabel(index: number) {
    return this.optionValue.at(index);
  }

  getCurrentOptionControl(index: number): FormControl {
    return this.optionsFromArray.at(index) as FormControl;
  }

  get answersFormArray(): FormArray {
    return this.answerFormGroup.controls['answer'] as FormArray;
  }

  get selectedAnswer(): FormControl {
    return this.answerFormGroup.controls['answer'] as FormControl;
  }

  getAnswerData(index: number): FormControl {
    return this.answersFormArray.at(index) as FormControl;
  }

  trackByFn(index: number): number {
    return index;
  }
}
