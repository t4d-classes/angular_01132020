import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ColorToolModule } from './color-tool/color-tool.module';
import { CarToolModule } from './car-tool/car-tool.module';
import { FormDemoModule } from './form-demo/form-demo.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ColorToolModule, CarToolModule, FormDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
