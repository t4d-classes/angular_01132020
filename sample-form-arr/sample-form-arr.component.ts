import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'sample-form-arr',
  templateUrl: './sample-form-arr.component.html',
  styleUrls: ['./sample-form-arr.component.css']
})
export class SampleFormArrComponent implements OnInit {

  colors = ['red', 'green', 'blue'];

  colorForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.colorForm = new FormGroup({
      colors: new FormArray(this.colors.map(c => new FormControl(c))),
    });
  }

  addColor() {
    this.colors.push('');

    const colorsFormArray = this.colorForm.get('colors') as FormArray;

    colorsFormArray.push(new FormControl(''));
  }

  saveColors() {
    console.log(this.colorForm.value);
  }

}
