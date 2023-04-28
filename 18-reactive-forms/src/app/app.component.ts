import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';

  reactiveForm: FormGroup;

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      personalDetails:new FormGroup({
        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email] ),
      }),
      gender: new FormControl('male'),
      country: new FormControl('USA'),
      hobbies: new FormControl(null)
    });
  }

  onSubmit(){
    console.log(this.reactiveForm);
  }
}
