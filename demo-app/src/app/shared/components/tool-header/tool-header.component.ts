import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-tool-header',
  templateUrl: './tool-header.component.html',
  styleUrls: ['./tool-header.component.css']
})
export class ToolHeaderComponent implements OnInit, DoCheck {

  @Input()
  public headerText: string;

  constructor() { }

  ngOnInit() {
    console.log('running tool header component on init');
  }

  ngDoCheck() {
    console.log('running change detection in tool header component')
  }

}
