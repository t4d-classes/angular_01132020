import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { MessageFormComponent } from './components/message-form/message-form.component';



@NgModule({
  declarations: [ MessageFormComponent ],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule,
  ],
  exports: [ MessageFormComponent ]
})
export class FormDemoModule { }
