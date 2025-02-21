import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fileanswer',
  templateUrl: './fileanswer.component.html',
  styleUrl: './fileanswer.component.css',
})
export class FileanswerComponent {
  @Input()
  answerFormGroup!: FormGroup;
}
