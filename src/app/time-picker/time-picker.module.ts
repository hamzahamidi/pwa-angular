import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePickerComponent } from './time-picker.component';
import { RouterModule } from '@angular/router';

const timePickerRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'time-picker',
    component: TimePickerComponent
  }
]);
@NgModule({
  imports: [
    CommonModule,
    timePickerRouting
  ],
  declarations: [TimePickerComponent]
})
export class TimePickerModule { }
