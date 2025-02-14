import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagementhomeComponent } from './usermanagementhome.component';

describe('UsermanagementhomeComponent', () => {
  let component: UsermanagementhomeComponent;
  let fixture: ComponentFixture<UsermanagementhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsermanagementhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermanagementhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
