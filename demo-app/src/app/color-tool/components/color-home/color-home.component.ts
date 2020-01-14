import { Component, OnInit, Input } from '@angular/core';

import { Color } from '../../models/color';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  // private _headerText: string;

  // @Input()
  // set headerText(value: string) {
  //   console.log('setting header text: ', value);
  //   this._headerText = value;
  // }

  // get headerText() {
  //   return this._headerText;
  // }

  @Input()
  headerText = 'Color Tool';

  colors: Color[] = [
    { id: 1, name: 'blue' },
    { id: 2, name: 'green' },
    { id: 3, name: 'yellow' },
    { id: 4, name: 'white' },
  ];

  // private fb: FormBuilder;

  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  constructor() { }

  ngOnInit() {
  }

  doAddColor(color: Color) {

    const newColor = {
      ...color,
      id: Math.max(...this.colors.map(c => c.id), 0) + 1,
    };

    this.colors = this.colors.concat(newColor);
  }

  trackByIdName(color: { id: number, name: string }) {
    return color.id + ':' + color.name;
  }

}
