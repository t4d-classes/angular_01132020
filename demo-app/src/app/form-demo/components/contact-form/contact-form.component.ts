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

const phoneOrEmailValidator = (phoneControlName: string, emailControlName: string) =>
  (c: AbstractControl) => {

    const phoneControl = c.get(phoneControlName);
    const emailControl = c.get(emailControlName);

    const phoneValue = String(phoneControl.value);
    const emailValue = String(emailControl.value);

    if (phoneValue.length === 0 && emailValue.length === 0) {
      return { phoneOrEmail: true };
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
      phone: '',
      email: '',
    }, {
      validators: [ phoneOrEmailValidator('phone', 'email') ]
    });
  }

  get firstNameErrors() {
    return this.contactForm.get('firstName').errors;
  }

  doSend() {

    if (this.contactForm.invalid) {
      console.log(this.contactForm.invalid);
      return;
    }

    // processing as normal
  }

}
