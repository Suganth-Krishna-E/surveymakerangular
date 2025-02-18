import { Component } from '@angular/core';

@Component({
  selector: 'app-fileanswer',
  templateUrl: './fileanswer.component.html',
  styleUrl: './fileanswer.component.css',
})
export class FileanswerComponent {
  acceptedFileType: string = 'application/pdf';

  updateAcceptedFileType(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const mimeTypes: { [key: string]: string } = {
      pdf: 'application/pdf',
      docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      png: 'image/png',
      jpg: 'image/jpeg',
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    };

    this.acceptedFileType = mimeTypes[selectedValue] || '*/*';
  }

  updateCustomFileType(event: Event) {
    const target = event.target as HTMLInputElement; 
    if (target) {
      this.acceptedFileType = target.value || '*/*'; 
    }
  }
  
}
