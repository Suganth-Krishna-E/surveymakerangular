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
    this.answerFormGroup.controls['options'] = new FormArray([]);
    this.optionsFromArray.push(new FormControl());
  }

  get optionsFromArray() {
    return this.answerFormGroup.controls['options'] as FormArray;
  }

  getCurrentOptionControl(index: number) {
    return this.optionsFromArray.at(index) as FormControl;
  }

  addOption() {
    const optionControl = new FormControl('');
    this.optionsFromArray.push(optionControl);
  }

  removeOption(index: number) {
    this.optionsFromArray.removeAt(index);
  }
}
