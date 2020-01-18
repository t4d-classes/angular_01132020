import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  private counter = 0;

  @Input()
  buttonText = 'Increment';

  @Output()
  increment = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  doIncrement() {
    this.increment.emit(this.counter++);
  }

}
