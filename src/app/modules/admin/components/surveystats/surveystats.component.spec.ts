import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveystatsComponent } from './surveystats.component';

describe('SurveystatsComponent', () => {
  let component: SurveystatsComponent;
  let fixture: ComponentFixture<SurveystatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurveystatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveystatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
