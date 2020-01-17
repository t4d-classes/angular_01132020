import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, debounceTime } from 'rxjs/operators';

interface Color {
  id: number;
  name: string;
}

@Component({
  selector: 'app-typeahead-demo',
  templateUrl: './typeahead-demo.component.html',
  styleUrls: ['./typeahead-demo.component.css']
})
export class TypeaheadDemoComponent implements OnInit {

  colorSearchInput = new FormControl('');

  colorSearch$ = new BehaviorSubject<any>([]);

  colors$ = this.colorSearch$.pipe(
    debounceTime(500),
    switchMap((colorName: string) => {
      return this.httpClient.get<Color[]>('http://localhost:4250/colors?name_like=' + colorName);
    }),
  );

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  doColorSearch() {
    this.colorSearch$.next(this.colorSearchInput.value);
  }

}
