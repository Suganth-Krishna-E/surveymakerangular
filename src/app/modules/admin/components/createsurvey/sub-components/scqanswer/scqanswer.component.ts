import { Component } from '@angular/core';

@Component({
  selector: 'app-scqanswer',
  templateUrl: './scqanswer.component.html',
  styleUrl: './scqanswer.component.css'
})
export class ScqanswerComponent {
  options: { id: number; value: string }[] = [{ id: 1, value: '' }];

  addOption() {
    this.options.push({ id: this.options.length + 1, value: '' });
  }

  removeOption(index: number) {
    this.options.splice(index, 1);
  }
}
