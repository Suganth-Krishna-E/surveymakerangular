import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextanswerComponent } from './textanswer.component';

describe('TextanswerComponent', () => {
  let component: TextanswerComponent;
  let fixture: ComponentFixture<TextanswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextanswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
