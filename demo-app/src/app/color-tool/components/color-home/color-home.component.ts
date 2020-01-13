import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  headerText = 'Color Tool';

  colors = [
    { id: 1, name: 'blue' },
    { id: 2, name: 'green' },
    { id: 3, name: 'yellow' },
    { id: 4, name: 'white' },
  ];

  colorForm: FormGroup;

  // private fb: FormBuilder;

  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.colorForm = this.fb.group({
      name: '',
    });
  }

  doAddColor() {

    const newColor = {
      name: this.colorForm.value.name,
      id: Math.max(...this.colors.map(color => color.id), 0) + 1,
    };

    // this.colors = this.colors.concat(newColor);

    this.colors = [
      { id: 1, name: 'blue' },
      { id: 2, name: 'green' },
      { id: 3, name: 'yellow' },
      { id: 4, name: 'white' },
      newColor,
    ];

  }

  trackByIdName(color: { id: number, name: string }) {
    return color.id + ':' + color.name;
  }

}
