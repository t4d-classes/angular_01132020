import { Injectable, InjectionToken } from '@angular/core';

import { Color } from '../models/color';


export interface IColorsService {
  allColors(): Color[];
  appendColor(color: Color): IColorsService;
}

export const ColorsServiceToken = new InjectionToken<IColorsService>('Colors Service Token');


let colorsSvcCounter = 0;

@Injectable()
export class ColorsService implements IColorsService {

  private colors: Color[] = [
    { id: 1, name: 'blue' },
    { id: 2, name: 'green' },
    { id: 3, name: 'yellow' },
    { id: 4, name: 'white' },
  ];

  constructor() {
    console.log('color svc instance id: ' + ++colorsSvcCounter);
  }

  allColors() {
    return this.colors.concat();
  }

  appendColor(color: Color) {

    const newColor = {
      ...color,
      id: Math.max(...this.colors.map(c => c.id), 0) + 1,
    };

    this.colors = this.colors.concat(newColor);

    return this;
  }
}

@Injectable()
export class ColorsService2 implements IColorsService {

  private colors: Color[] = [
    { id: 1, name: 'orange' },
  ];

  constructor() {
    console.log('color svc instance id: ' + ++colorsSvcCounter);
  }

  allColors() {
    return this.colors.concat();
  }

  appendColor(color: Color) {

    const newColor = {
      ...color,
      id: Math.max(...this.colors.map(c => c.id), 0) + 1,
    };

    this.colors = this.colors.concat(newColor);

    return this;
  }
}
