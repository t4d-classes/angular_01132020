import { 
  Component, OnInit, Input,
  Output, EventEmitter,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { Car } from '../../models/car';
import { HttpClient } from '@angular/common/http';

const carMakeValidator = (c: AbstractControl) => {

  const sValue = String(c.value);

  if (sValue.length > 0) {
    if (!['Ford', 'Tesla', 'Toyota'].includes(sValue)) {
      return {
        carMake: true,
      };
    }
  }

  return null;
};

const carColorAsyncValidator = (httpClient: HttpClient) => (c: AbstractControl) => {

  console.log('called async validator');

  if (c.value.length < 3) {
    return Promise.resolve(null);
  }

  return new Promise<any>(function(resolve) {

    return httpClient
      .get<object[]>('http://localhost:4250/colors?name=' + c.value)
      .toPromise()
      .then((colors) => {
        if (colors.length === 1) {
          resolve(null);
        } else {
          resolve({
            carColor: true,
          });
        }
      });
  });

};

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input()
  buttonText = 'Submit Car';

  @Output()
  submitCar = new EventEmitter<Car>();

  carForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
    this.carForm = this.fb.group({
      make: [ '', { validators: [ carMakeValidator ] } ],
      model: [ '', { asyncValidators: [ carColorAsyncValidator(this.httpClient) ] } ],
      year: [ 0, { validators: [
        Validators.required,
        Validators.min(1885),
        Validators.max(new Date().getFullYear()),
      ] } ],
      color: '',
      price: [ 0, { validators: [ Validators.required, Validators.min(0) ] } ],
    });

  }

  doSubmitCar() {
    this.submitCar.emit({
      ...this.carForm.value,
    });
  }

  get carFormErrors() {
    return (Object.keys(this.carForm.controls) as any)
      .flatMap(controlKey => {
        const control = this.carForm.controls[controlKey];
        return control.errors == null
          ? []
          : Object.keys(control.errors)
            .map(errorKey => controlKey + ': ' + errorKey);
      });
  }


}
