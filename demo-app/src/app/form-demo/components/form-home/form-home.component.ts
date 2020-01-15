import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-home',
  templateUrl: './form-home.component.html',
  styleUrls: ['./form-home.component.css']
})
export class FormHomeComponent implements OnInit {

  // fullNameInput: FormControl;
  // messageInput: FormControl;

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // const fullNameInput = new FormControl('');
    // const messageInput = new FormControl('');

    // this.contactForm = new FormGroup({
    //   fullName: fullNameInput,
    //   message: messageInput,
    //   address: new FormGroup({
    //     city: new FormControl(''),
    //     state: new FormControl(''),
    //   }),
    // });

    this.contactForm = this.fb.group({
      fullName: '',
      message: '',
      address: this.fb.group({
        city: '',
        state: '',
      }),
    });
  }

}
