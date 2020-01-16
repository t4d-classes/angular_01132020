import { Component, OnInit, Input } from '@angular/core';

import { ColorsService } from '../../services/colors.service';

import { Color } from '../../models/color';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  @Input()
  headerText = 'Color Tool';

  colors: Color[];

  constructor(private colorsSvc: ColorsService) { }

  ngOnInit() {
    this.colors = this.colorsSvc.allColors();
  }

  doAddColor(color: Color) {
    this.colors = this.colorsSvc
      .appendColor(color)
      .allColors();
  }

  trackByIdName(color: { id: number, name: string }) {
    return color.id + ':' + color.name;
  }

}
