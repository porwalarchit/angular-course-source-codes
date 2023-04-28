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

  gender = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'Other' }
  ]

  @ViewChild('myForm') form: NgForm;

  onSubmit() {
    console.log(this.form);
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
