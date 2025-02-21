import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-numberanswer',
  templateUrl: './numberanswer.component.html',
  styleUrl: './numberanswer.component.css'
})
export class NumberanswerComponent {
  @Input()
  answerFormGroup!: FormGroup;

}
