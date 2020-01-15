import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { MessageFormComponent } from './components/message-form/message-form.component';
import { FormHomeComponent } from './components/form-home/form-home.component';
import { FullNameControlComponent } from './components/full-name-control/full-name-control.component';



@NgModule({
  declarations: [ MessageFormComponent, FormHomeComponent, FullNameControlComponent ],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule,
  ],
  exports: [ MessageFormComponent, FormHomeComponent ]
})
export class FormDemoModule { }
