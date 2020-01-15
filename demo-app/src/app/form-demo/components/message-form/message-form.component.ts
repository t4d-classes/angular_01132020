import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  messageForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.fb.group({
      message: '',
      textLength: 0,
    });
  }

}
