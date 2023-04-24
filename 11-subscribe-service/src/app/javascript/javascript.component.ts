import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent{
  title = "JavaScript";
  
  OnEnroll(){
    const enrollservice = new EnrollService();
    enrollservice.OnEnrollClicked(this.title);
  }
}
