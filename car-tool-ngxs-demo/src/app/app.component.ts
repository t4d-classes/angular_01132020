import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CarsState, EditCar, CancelCar, RemoveCar, AppendCar, ReplaceCar } from './cars.state';
import { Observable } from 'rxjs';
import { Car } from './car-tool/models/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Select(CarsState.cars) cars$: Observable<Car[]>;

  @Select(CarsState.editCarId) editCarId$: Observable<number>;

  constructor(private store: Store) { }

  doEditCar(carId: number) {
    this.store.dispatch(new EditCar(carId));
  }

  doCancelCar() {
    this.store.dispatch(new CancelCar());
  }

  doAppendCar(car: Car) {
    this.store.dispatch(new AppendCar(car));
  }

  doReplaceCar(car: Car) {
    this.store.dispatch(new ReplaceCar(car));
  }

  doRemoveCar(carId: number) {
    this.store.dispatch(new RemoveCar(carId));
  }
}
