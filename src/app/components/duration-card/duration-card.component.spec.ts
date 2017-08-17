import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationCardComponent } from './duration-card.component';
// Angular Material components
import { MdCardModule} from '@angular/material';

describe('DurationCardComponent', () => {
  let component: DurationCardComponent;
  let fixture: ComponentFixture<DurationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationCardComponent ],
  imports: [MdCardModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
