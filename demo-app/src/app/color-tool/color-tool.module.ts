import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ColorsService, ColorsServiceToken } from './services/colors.service';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { ColorListItemComponent } from './components/color-list-item/color-list-item.component';

// class Mode { }

const MODE_TOKEN = new InjectionToken<string>('Mode Service Token');

@NgModule({
  declarations: [ ColorHomeComponent, ColorFormComponent, ColorListItemComponent ],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule,
  ],
  exports: [ ColorHomeComponent ],
  providers: [ { provide: ColorsServiceToken, useClass: ColorsService } ],
  // providers: [ ColorsService ],
  // providers: [ { provide: ColorsService, useValue: new ColorsService() } ],
  // providers: [ { provide: ColorsService, useValue: {
  //   allColors() { return [ { id: 1, name: 'orange ' } ]; }
  // } } ],
  // providers: [
  //   { provide: MODE_TOKEN, useValue: 'Development' },
  //   { provide: ColorsService, deps:[ MODE_TOKEN ], useFactory: (mode: string) => {
  //     console.log('creating colors service');

  //     if (mode !== 'Production') {
  //       return {
  //         allColors() { return [ { id: 1, name: 'orange ' } ]; }
  //       };
  //     } else {
  //       return new ColorsService();
  //     }

  //   } }
  // ],
})
export class ColorToolModule { }
