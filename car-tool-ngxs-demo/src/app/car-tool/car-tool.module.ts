import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarViewRowComponent } from './components/car-view-row/car-view-row.component';
import { CarEditRowComponent } from './components/car-edit-row/car-edit-row.component';

@NgModule({
  declarations: [
    ToolHeaderComponent,
    CarTableComponent,
    CarFormComponent,
    CarViewRowComponent,
    CarEditRowComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ToolHeaderComponent,
    CarTableComponent,
    CarFormComponent,
  ],
})
export class CarToolModule { }
