import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';

import { MessageFormComponent } from './components/message-form/message-form.component';
import { FormHomeComponent } from './components/form-home/form-home.component';
import { FullNameControlComponent } from './components/full-name-control/full-name-control.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { TypeaheadDemoComponent } from './components/typeahead-demo/typeahead-demo.component';



@NgModule({
  declarations: [ MessageFormComponent, FormHomeComponent, FullNameControlComponent, ContactFormComponent, TypeaheadDemoComponent ],
  imports: [
    CommonModule, ReactiveFormsModule, HttpClientModule, SharedModule,
  ],
  exports: [ MessageFormComponent, FormHomeComponent, ContactFormComponent, TypeaheadDemoComponent ]
})
export class FormDemoModule { }
