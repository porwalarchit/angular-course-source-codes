import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent{
  title="Angular";

  OnEnroll(){
    alert("Thanks for enrolling to " + this.title + ' course.');
  }
}