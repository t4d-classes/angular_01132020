import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';


import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarViewRowComponent } from './components/car-view-row/car-view-row.component';
import { CarEditRowComponent } from './components/car-edit-row/car-edit-row.component';
import { ColorControlComponent } from './components/color-control/color-control.component';
import { CarColorPipe } from './pipes/car-color.pipe';

@NgModule({
  declarations: [CarHomeComponent, CarTableComponent, CarFormComponent, CarViewRowComponent, CarEditRowComponent, ColorControlComponent, CarColorPipe],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule,
  ],
  exports: [CarHomeComponent],
})
export class CarToolModule { }
