import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, map, debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

interface Color {
  id:  number;
  name: string;
}

@Component({
  selector: 'typeahead-demo',
  templateUrl: './typeahead-demo.component.html',
  styleUrls: ['./typeahead-demo.component.css']
})
export class TypeaheadDemoComponent implements OnInit {

  colorSearchTextInput = new FormControl();

  searchColors$ = new BehaviorSubject<string[]>([]);

  colors$: Observable<string[]> = this.searchColors$.pipe(
    debounceTime(500),
    switchMap(searchColorText => this.httpClient
      .get<Color[]>('http://localhost:4250/colors?name_like=' + searchColorText)),
    map(colors => colors.map(color => color.name)),
  );

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  doColorSearch() {
    this.searchColors$.next(this.colorSearchTextInput.value);
  }

}
