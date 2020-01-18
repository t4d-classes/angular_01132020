import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsResolveService implements Resolve<Car[]> {

  constructor(private httpClient: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.httpClient.get<Car[]>('http://localhost:4250/cars');
  }

}
