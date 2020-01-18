import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { Color } from './color-tool/models/color';
import { ColorsState, AppendColor, RemoveColor } from './colors.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Select(ColorsState) colors$: Observable<Color[]>;

  colorContent = (color: Color) => color.name;

  colorId = (color: Color) => color.id;

  constructor(private store: Store) { }

  doAppendColor(color: Color) {
    this.store.dispatch(new AppendColor(color));
  }

  doRemoveColor(colorId: number) {
    this.store.dispatch(new RemoveColor(colorId));
  }
}
