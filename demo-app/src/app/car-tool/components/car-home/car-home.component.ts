import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import {  debounceTime } from 'rxjs/operators';

import { Car } from '../../models/car';
import { CarsService } from '../../services/cars.service';
@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  errorMessage = '';

  cars: Car[];

  editCarId = -1;

  constructor(private carsSvc: CarsService) { }

  ngOnInit() {
    this.carsSvc.allCars()
      .subscribe(cars => {
        this.cars = cars;
        this.editCarId = -1;
      });

    fromEvent(window, 'scroll').pipe(debounceTime(1000)).subscribe(e => {
      console.log(e);
    });
  }

  doAddCar(car: Car) {
    this.carsSvc
      .appendCar(car)
      .pipe(
        switchMap(() => this.carsSvc.allCars())
      )
      .subscribe({
        next: cars => {
          this.cars = cars;
          this.editCarId = -1;
        },
        error: err => {
          this.errorMessage = err.message;
        },
      });
  }

  doReplaceCar(car: Car) {
    this.carsSvc
      .replaceCar(car)
      .pipe(
        switchMap(() => this.carsSvc.allCars())
      )
      .subscribe({
        next: cars => {
          this.cars = cars;
          this.editCarId = -1;
        },
        error: err => {
          this.errorMessage = err.message;
        },
      });
  }

  doDeleteCar(carId: number) {
    this.carsSvc
      .deleteCar(carId)
      .pipe(
        switchMap(() => this.carsSvc.allCars())
      )
      .subscribe({
        next: cars => {
          this.cars = cars;
          this.editCarId = -1;
        },
        error: err => {
          this.errorMessage = err.message;
        },
      });
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

}
