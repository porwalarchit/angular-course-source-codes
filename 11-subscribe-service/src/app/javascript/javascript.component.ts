import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  providers: [EnrollService]
})
export class JavascriptComponent{
  title = "JavaScript";

  constructor(private enrollservice: EnrollService){
  }

  OnEnroll(){
    this.enrollservice.OnEnrollClicked(this.title);
  }
}
