import { Injectable } from '@angular/core';

import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  private colors: Color[] = [
    { id: 1, name: 'blue' },
    { id: 2, name: 'green' },
    { id: 3, name: 'yellow' },
    { id: 4, name: 'white' },
  ];

  constructor() { }

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
