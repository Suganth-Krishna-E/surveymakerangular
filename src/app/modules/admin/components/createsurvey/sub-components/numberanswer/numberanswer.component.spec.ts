import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberanswerComponent } from './numberanswer.component';

describe('NumberanswerComponent', () => {
  let component: NumberanswerComponent;
  let fixture: ComponentFixture<NumberanswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberanswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
