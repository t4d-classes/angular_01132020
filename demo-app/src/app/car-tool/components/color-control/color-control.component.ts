import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CarColor } from '../../models/car';

@Component({
  selector: 'app-color-control',
  templateUrl: './color-control.component.html',
  styleUrls: ['./color-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, multi: true,
      useExisting: forwardRef(() => ColorControlComponent)
    },
  ],
})
export class ColorControlComponent implements OnInit, ControlValueAccessor {

  colorForm: FormGroup;

  private _onChange: (color: { ext: string, int: string }) => void;

  private _onTouched: () => void;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.colorForm = this.fb.group({
      ext: '',
      int: '',
    });
  }

  writeValue(color: CarColor): void {
  
    if (color == null) {
      this.colorForm.get('ext').setValue('');
      this.colorForm.get('int').setValue('');
      return;
    }

    this.colorForm.get('ext').setValue(color.ext);
    this.colorForm.get('int').setValue(color.int);
  }

  registerOnChange(fn: any): void {
   this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.colorForm.get('ext').disable();
      this.colorForm.get('int').disable();
    } else {
      this.colorForm.get('ext').enable();
      this.colorForm.get('int').enable();
    }
  }

  doInput() {
    this._onChange(this.colorForm.value);
  }

  doBlur() {
    this._onTouched();
  }

}
