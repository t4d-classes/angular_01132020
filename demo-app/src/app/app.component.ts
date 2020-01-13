import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  headerText = 'demo-app';

  ngOnInit() {
    console.log('running app component on init');

    this.headerText = 'this is cool';

    setTimeout(() => {
      this.headerText = 'time to go home...';
    }, 4000);
  }
}
