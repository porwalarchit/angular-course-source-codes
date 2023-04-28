import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  defaultCountry = 'india';
  firstname: string;
  lastname: string;
  defaultGender: 'Female';
  email:string;
  gen: string;
  country: string

  gender = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'Other' }
  ]

  @ViewChild('myForm') form: NgForm;

  onSubmit() {
    console.log(this.form);

    this.firstname = this.form.value.personDetails.firstname;
    this.lastname = this.form.value.personDetails.lastname;
    this.email = this.form.value.personDetails.email;
    this.gen = this.form.value.gender;
    this.country = this.form.value.country;

    // Resets the form state.
    this.form.reset();
  }

  setDefaultValues() {
    // pass the exact structure of form object and form group to setValue method.
    // this.form.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personDetails: {
    //     firstname: 'Archit',
    //     lastname: 'Porwal',
    //     email: 'architporwal@gmail.com'
    //   }
    // });

    // use patchValue when we want to set value for some of the form controls.
    this.form.form.patchValue({
      personDetails: {
        firstname: 'Archit',
        lastname: 'Porwal',
        email: 'architporwal@gmail.com'
      }
    })
  }
}
