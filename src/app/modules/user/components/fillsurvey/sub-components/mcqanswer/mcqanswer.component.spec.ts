import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqanswerComponent } from './mcqanswer.component';

describe('McqanswerComponent', () => {
  let component: McqanswerComponent;
  let fixture: ComponentFixture<McqanswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [McqanswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McqanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
