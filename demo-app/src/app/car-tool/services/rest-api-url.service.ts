import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
  useValue: {
    carsUrl: environment.carsRestAPIURL,
  },
})
export class RestApiUrlService {

  carsUrl: string;

  constructor() { }
}
