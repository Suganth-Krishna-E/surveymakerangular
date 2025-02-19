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

  @Output()
  copy: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  delete: EventEmitter<void> = new EventEmitter<void>();

  selectedType: string = 'text';

  ngOnInit() {
    this.subscriptions = new Array<Subscription>;
    this.selectedType = this.formGroupQuestion.get('type')?.value;

    const selectChangeSubscription = this.formGroupQuestion.get('type')?.valueChanges.subscribe((newValue) => {
      this.selectedType = newValue;
    });

    this.subscriptions.push(selectChangeSubscription ?? new Subscription());
  }

  getFormControl() {
    return this.formGroupQuestion as FormGroup;
  }
  

  deleteQuestion() {
    this.delete.emit();
  }

  copyQuestion() {
    this.copy.emit();
  }

  ngOnDestroy() {    
    this.subscriptions.forEach((subription) => {
      subription.unsubscribe();
    });
  }

}
