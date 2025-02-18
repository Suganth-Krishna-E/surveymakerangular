import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  @Input() 
  formGroup: FormGroup = new FormGroup({});

  @Output()
  copy: EventEmitter<null> = new EventEmitter<null>();

  @Output()
  delete: EventEmitter<null> = new EventEmitter<null>();

  selectedType: string = 'text';
  questionTitle: string = '';

  deleteQuestion() {
    this.delete.emit();
  }

  copyQuestion() {
    this.copy.emit();
  }

}
