import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePickerComponent } from './time-picker.component';
import { FormsModule } from '@angular/forms';
import { DurationCardComponent } from '../components/duration-card/duration-card.component';
// Angular Material components
import { MdCardModule } from '@angular/material';
// animation module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('TimePickerComponent', () => {
  let component: TimePickerComponent;
  let fixture: ComponentFixture<TimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimePickerComponent, DurationCardComponent],
      imports: [FormsModule, MdCardModule, BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
