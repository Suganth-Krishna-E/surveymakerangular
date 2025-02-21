import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textanswer',
  templateUrl: './textanswer.component.html',
  styleUrl: './textanswer.component.css'
})
export class TextanswerComponent {

  @Input()
  answerFormGroup!: FormGroup;
}
