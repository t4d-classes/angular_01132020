import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ItemListComponent } from './components/item-list/item-list.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';



@NgModule({
  declarations: [ItemListComponent, ColorFormComponent, ToolHeaderComponent],
  imports: [
    CommonModule, ReactiveFormsModule,
  ],
  exports: [ItemListComponent, ColorFormComponent, ToolHeaderComponent]
})
export class ColorToolModule { }
