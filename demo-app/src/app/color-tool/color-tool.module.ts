import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { ColorListItemComponent } from './components/color-list-item/color-list-item.component';

@NgModule({
  declarations: [ ColorHomeComponent, ColorFormComponent, ColorListItemComponent ],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule,
  ],
  exports: [ ColorHomeComponent ],
})
export class ColorToolModule { }
