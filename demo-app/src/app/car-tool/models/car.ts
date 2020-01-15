export interface CarColor {
  ext: string;
  int: string;
}

export interface Car {
  id?: number;
  make: string;
  model: string;
  year: number;
  color: CarColor;
  price: number;
}