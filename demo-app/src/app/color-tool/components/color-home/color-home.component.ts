import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

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

  colorListForm: FormGroup;

  constructor(@Inject(ColorsServiceToken) private colorsSvc: IColorsService) { }

  updateColors = (colors: Color[]) => {

    this.colors = colors;

    this.colorListForm = new FormGroup({
      colorInputs: new FormArray(this.colors.map(c => new FormGroup({
        id: new FormControl(c.id),
        name: new FormControl(c.name),
      })),
    )});

  }

  ngOnInit() {

    this.colorListForm = new FormGroup({ colorInputs: new FormArray([]), });

    this.colorsSvc
      .allColors()
      .then(this.updateColors);
  }

  showForm() {
    console.log(this.colorListForm.value);
  }

  doAddColor(color: Color) {
    this.colorsSvc
      .appendColor(color)
      .then(() => this.colorsSvc.allColors())
      .then(this.updateColors);
  }

  trackByIdName(color: { id: number, name: string }) {
    return color.id + ':' + color.name;
  }

}
