import { Component, ElementRef, ViewChild} from '@angular/core';
import { DemoComponent } from './demo/demo.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChild';

  @ViewChild('dobInput') dateOfBirth: ElementRef;
  @ViewChild('ageInput') age: ElementRef;
  @ViewChild(DemoComponent, {static: true}) demoComp : DemoComponent;

  // Method to calcualate age, based on the DoB entered.
  calculateAge(){
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();

    let age = currentYear-birthYear;

    // Assign calculated age to the local variable.
    this.age.nativeElement.value = age;

    // console.log(this.dateOfBirth,'/n' ,this.age)
  }
}
