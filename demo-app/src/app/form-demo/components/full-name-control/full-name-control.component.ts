import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-full-name-control',
  templateUrl: './full-name-control.component.html',
  styleUrls: ['./full-name-control.component.css']
})
export class FullNameControlComponent implements OnInit, ControlValueAccessor {

  fullNameForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fullNameForm = this.fb.group({
      firstName: '',
      lastName: '',
    });
  }

  writeValue(obj: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

}
