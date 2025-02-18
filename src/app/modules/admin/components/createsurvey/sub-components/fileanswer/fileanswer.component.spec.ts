import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileanswerComponent } from './fileanswer.component';

describe('FileanswerComponent', () => {
  let component: FileanswerComponent;
  let fixture: ComponentFixture<FileanswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileanswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
