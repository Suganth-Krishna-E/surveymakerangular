import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-scqanswer',
  templateUrl: './scqanswer.component.html',
  styleUrl: './scqanswer.component.css'
})
export class ScqanswerComponent implements OnInit {
  @Input() answerFormGroup!: FormGroup;

  ngOnInit() {
    this.answerFormGroup.controls['options'] = new FormArray([])
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
    console.log(this.optionsFromArray);
    this.optionsFromArray.push(optionControl);
  }

  removeOption(index: number) {
    this.optionsFromArray.removeAt(index);
  }
}
