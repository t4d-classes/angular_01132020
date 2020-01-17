import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestApiUrlService } from './rest-api-url.service';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private httpClient: HttpClient,
    private restApiUrl: RestApiUrlService,
  ) { }

  allCars() {
    return this.httpClient
      .get<Car[]>(this.restApiUrl.carsUrl);
  }

  appendCar(car: Car) {
    return this.httpClient
      .post<Car>(this.restApiUrl.carsUrl, car);
  }

  replaceCar(car: Car) {
    return this.httpClient
      .put<Car>(this.restApiUrl.carsUrl + '/' + car.id, car);
  }

  deleteCar(carId: number) {
    return this.httpClient
      .delete<void>(this.restApiUrl.carsUrl + '/' + carId);
  }

}
