import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  // providers: [EnrollService]
})
export class AngularComponent{
  title="Angular";

  constructor(private enrollservice: EnrollService){
  }

  OnEnroll(){
    this.enrollservice.OnEnrollClicked(this.title);
  }
}