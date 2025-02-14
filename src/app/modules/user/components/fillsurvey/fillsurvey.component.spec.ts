import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillsurveyComponent } from './fillsurvey.component';

describe('FillsurveyComponent', () => {
  let component: FillsurveyComponent;
  let fixture: ComponentFixture<FillsurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FillsurveyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
