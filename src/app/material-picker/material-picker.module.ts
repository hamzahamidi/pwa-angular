import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialPickerComponent } from './material-picker.component';

const MaterialPickerRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'material-picker',
    component: MaterialPickerComponent
  }
]);
@NgModule({
  imports: [
    CommonModule,
    MaterialPickerRouting
  ],
  declarations: []
})
export class MaterialPickerModule { }
