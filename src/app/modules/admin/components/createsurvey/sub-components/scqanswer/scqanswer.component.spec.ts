import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScqanswerComponent } from './scqanswer.component';

describe('ScqanswerComponent', () => {
  let component: ScqanswerComponent;
  let fixture: ComponentFixture<ScqanswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScqanswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScqanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
