import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextAreaResize]'
})
export class TextAreaResizeDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 
    this.adjustHeight();
    renderer.setStyle(element.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('input') 
  onInput(): void {
    this.adjustHeight();
  }

  private adjustHeight(): void {
    const textArea = this.element.nativeElement;
    textArea.style.height = 'auto';
    textArea.style.border = '2px solid red';
    textArea.style.height = `${textArea.scrollHeight}px`;
  }


}
