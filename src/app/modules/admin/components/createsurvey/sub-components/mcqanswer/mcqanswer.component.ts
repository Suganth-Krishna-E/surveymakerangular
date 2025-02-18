import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mcqanswer',
  templateUrl: './mcqanswer.component.html',
  styleUrl: './mcqanswer.component.css'
})
export class McqanswerComponent {
  options: { id: number; value: string }[] = [{ id: 1, value: '' }];

  addOption() {
    this.options.push({ id: this.options.length + 1, value: '' });
  }

  removeOption(index: number) {
    this.options.splice(index, 1);
  }
}
