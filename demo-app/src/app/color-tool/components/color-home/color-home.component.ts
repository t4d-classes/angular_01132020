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
