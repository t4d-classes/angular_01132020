import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css'],
})
export class ColorHomeComponent implements OnInit {

  // headerText = 'Vijay\'s Color Tool';

  message = new FormControl('A message of hope, peace and love...');

  get headerText() {
    console.log('getting header text');
    return 'Vijay\'s Color Tool';
  }

  colors = [ { name: 'purple' }, { name: 'teal' }, { name: 'blue' }, { name: 'green' } ];

  constructor() { }

  ngOnInit() {
  }

  addColor(newColor: string) {
    // this.colors = this.colors.concat(newColor);
    this.colors = [ { name: 'purple' }, { name: 'teal' }, { name: 'blue' }, { name: 'green' } ];
  }

  trackColors(index: number, color: { name: string }) {
    return color;
    //return color.name;
  }

}
