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
    if (!this.answerFormGroup.get('options')) {
      this.answerFormGroup.addControl('options', new FormArray([]));
    }

    if (this.optionsFromArray.length === 0) {
      this.addOption();
    }
  }

  get optionsFromArray(): FormArray {
    return this.answerFormGroup.get('options') as FormArray;
  }

  getCurrentOptionControl(index: number): FormControl {
    return this.optionsFromArray.at(index) as FormControl;
  }

  addOption() {
    this.optionsFromArray.push(new FormControl(''));
  }

  removeOption(index: number) {
    this.optionsFromArray.removeAt(index);
  }
}
