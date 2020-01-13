import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {
  }

}
