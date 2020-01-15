import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

const myRequired = (c: AbstractControl) => {

  if (!c.value || String(c.value).length === 0) {
    return {
      myRequired: true,
    };
  }


  return null;

};

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: [ '', { validators: [ myRequired, Validators.minLength(3), ] } ],
    });
  }

  get firstNameErrors() {
    return this.contactForm.get('firstName').errors;
  }

}
