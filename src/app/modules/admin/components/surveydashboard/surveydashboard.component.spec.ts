import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveydashboardComponent } from './surveydashboard.component';

describe('SurveydashboardComponent', () => {
  let component: SurveydashboardComponent;
  let fixture: ComponentFixture<SurveydashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurveydashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
