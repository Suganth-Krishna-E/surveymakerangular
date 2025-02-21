import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mcqanswer',
  templateUrl: './mcqanswer.component.html',
  styleUrl: './mcqanswer.component.css'
})
export class McqanswerComponent {
  @Input() answerFormGroup!: FormGroup;

  ngOnInit() {
    for(let option of this.optionsFromArray.value){
      this.answersFormArray.push(new FormControl())
    }
  }

  get optionsFromArray(): FormArray {
    return this.answerFormGroup.controls['options'] as FormArray;
  }

  get answersFormArray(): FormArray {
    return this.answerFormGroup.controls['answer'] as FormArray;
  }

  getCurrentOptionControl(index: number): FormControl {
    return this.optionsFromArray.at(index) as FormControl;
  }

  getAnswerData(index: number): FormControl {
    return this.answersFormArray.at(index) as FormControl;
  }
}
