import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPickerComponent } from './material-picker.component';
// Angular Material components
import { MdDatepickerModule, MdNativeDateModule, MdInputModule, MdCardModule } from '@angular/material';

import { FormsModule } from '@angular/forms';
import { DurationCardComponent } from '../components/duration-card/duration-card.component';
// animation module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('MaterialPickerComponent', () => {
  let component: MaterialPickerComponent;
  let fixture: ComponentFixture<MaterialPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialPickerComponent, DurationCardComponent ],
      imports: [MdDatepickerModule, MdNativeDateModule, MdInputModule, MdCardModule, FormsModule,BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
