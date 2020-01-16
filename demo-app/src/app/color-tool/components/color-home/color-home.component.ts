import { Component, OnInit, Input, Inject } from '@angular/core';

import { ColorsServiceToken, IColorsService } from '../../services/colors.service';

import { Color } from '../../models/color';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css'],
})
export class ColorHomeComponent implements OnInit {

  @Input()
  headerText = 'Color Tool';

  colors: Color[];

  constructor(@Inject(ColorsServiceToken) private colorsSvc: IColorsService) { }

  ngOnInit() {
    this.colorsSvc
      .allColors()
      .then(colors => this.colors = colors);
  }

  doAddColor(color: Color) {
    this.colorsSvc
      .appendColor(color)
      .then(() => this.colorsSvc.allColors())
      .then(colors => this.colors = colors);
  }

  trackByIdName(color: { id: number, name: string }) {
    return color.id + ':' + color.name;
  }

}
