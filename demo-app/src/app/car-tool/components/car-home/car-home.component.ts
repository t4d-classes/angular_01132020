import { Component, OnInit } from '@angular/core';

import { Car } from '../../models/car';
@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: { ext: 'blue', int: 'beige' }, price: 45000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2017, color: { ext: 'red', int: 'black' }, price: 120000 },
  ];

  editCarId = -1;

  constructor() { }

  ngOnInit() {}

  doAddCar(car: Car) {
    this.cars = this.cars.concat({
      ...car,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,
    });
    this.editCarId = -1;
  }

  doReplaceCar(car: Car) {
    const carIndex = this.cars.findIndex(c => c.id === car.id);
    const cars = this.cars.concat();
    cars[carIndex] = car;
    this.cars = cars;
    this.editCarId = -1;
  }

  doDeleteCar(carId: number) {
    this.cars = this.cars.filter(c => c.id !== carId);
    this.editCarId = -1;
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

}
