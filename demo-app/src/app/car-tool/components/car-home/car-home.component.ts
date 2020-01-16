import { Component, OnInit } from '@angular/core';

import { Car } from '../../models/car';
import { CarsService } from '../../services/cars.service';
@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  cars: Car[];

  editCarId = -1;

  constructor(private carsSvc: CarsService) { }

  ngOnInit() {
    this.carsSvc.allCars()
      .then(cars => {
        this.cars = cars;
        this.editCarId = -1;
      });
  }

  doAddCar(car: Car) {
    this.carsSvc
      .appendCar(car)
      .then(() => this.carsSvc.allCars())
      .then(cars => {
        this.cars = cars;
        this.editCarId = -1;
      });
  }

  doReplaceCar(car: Car) {
    this.carsSvc
      .replaceCar(car)
      .then(() => this.carsSvc.allCars())
      .then(cars => {
        this.cars = cars;
        this.editCarId = -1;
      });
  }

  doDeleteCar(carId: number) {
    this.carsSvc
      .deleteCar(carId)
      .then(() => this.carsSvc.allCars())
      .then(cars => {
        this.cars = cars;
        this.editCarId = -1;
      });
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

}
