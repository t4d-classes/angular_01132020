import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Color } from '../models/color';

export interface IColorsService {
  allColors(): Promise<Color[]>;
  appendColor(color: Color): Promise<Color>;
}

export const ColorsServiceToken = new InjectionToken<IColorsService>('Colors Service Token');

@Injectable()
export class ColorsService implements IColorsService {

  constructor(private httpClient: HttpClient) { }

  allColors() {
    return this.httpClient
      .get<Color[]>('http://localhost:4250/colors')
      .toPromise();
  }

  appendColor(color: Color) {
    return this.httpClient
      .post<Color>('http://localhost:4250/colors', color)
      .toPromise();
  }
}
