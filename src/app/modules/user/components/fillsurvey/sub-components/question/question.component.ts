import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

  subscriptions!: Array<Subscription>;

  @Input() 
  formGroupQuestion!: FormGroup;

  selectedType: string = 'text';

  ngOnInit() {
    this.subscriptions = new Array<Subscription>;
    this.selectedType = this.formGroupQuestion.controls['type']?.value;

    const selectChangeSubscription = this.formGroupQuestion.get('type')?.valueChanges.subscribe((newValue) => {
      this.selectedType = newValue;
    });

    this.subscriptions.push(selectChangeSubscription ?? new Subscription());
  }

  getFormControl() {
    return this.formGroupQuestion as FormGroup;
  }
  
  ngOnDestroy() {    
    this.subscriptions.forEach((subription) => {
      subription.unsubscribe();
    });
  }

}
