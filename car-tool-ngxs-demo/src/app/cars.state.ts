import { State, Selector, Action, StateContext } from '@ngxs/store';

import { Car } from './car-tool/models/car';

export class AppendCar {
  static readonly type = '[Cars] AppendCar';
  constructor(public car: Car) { }
}

export class ReplaceCar {
  static readonly type = '[Cars] ReplaceCar';
  constructor(public car: Car) { }
}

export class RemoveCar {
  static readonly type = '[Cars] RemoveCar';
  constructor(public carId: number) { }
}

export class EditCar {
  static readonly type = '[Cars] EditCar';
  constructor(public carId: number) { }
}

export class CancelCar {
  static readonly type = '[Cars] CancelCar';
  constructor() { }
}

export interface CarsStateModel {
  cars: Car[];
  editCarId: number;
}

@State<CarsStateModel>({
  name: 'cars',
  defaults: {
    cars: [
      { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'blue', price: 45000 },
      { id: 2, make: 'Tesla', model: 'S', year: 2017, color: 'red', price: 120000 },
    ],
    editCarId: -1,
  }
})
export class CarsState {

  @Selector()
  static cars(state: CarsStateModel) {
    return state.cars;
  }

  @Selector()
  static editCarId(state: CarsStateModel) {
    return state.editCarId;
  }

  @Action(AppendCar)
  appendCar(ctx: StateContext<CarsStateModel>, action: AppendCar) {

    const state = ctx.getState();
    ctx.patchState({
      cars: state.cars.concat({
        ...action.car,
        id: Math.max(...state.cars.map(c => c.id), 0) + 1,
      }),
    });

    return ctx.dispatch(new CancelCar());
  }

  @Action(ReplaceCar)
  replaceCar(ctx: StateContext<CarsStateModel>, action: ReplaceCar) {

    const state = ctx.getState();

    const carIndex = state.cars.findIndex(c => c.id === action.car.id);
    const cars = state.cars.concat();
    cars[carIndex] = action.car;

    ctx.patchState({
      cars,
    });

    return ctx.dispatch(new CancelCar());
  }

  @Action(RemoveCar)
  removeCar(ctx: StateContext<CarsStateModel>, action: RemoveCar) {

    const state = ctx.getState();
    ctx.patchState({
      cars: state.cars.filter(c => c.id !== action.carId),
    });

    return ctx.dispatch(new CancelCar());
  }

  @Action(EditCar)
  editCar(ctx: StateContext<CarsStateModel>, action: EditCar) {
    ctx.patchState({
      editCarId: action.carId,
    });
  }

  @Action(CancelCar)
  cancelCar(ctx: StateContext<CarsStateModel>) {
    ctx.patchState({
      editCarId: -1,
    });
  }
}