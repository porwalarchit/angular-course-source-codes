import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent{
  title = "JavaScript";
  
  OnEnroll(){
    alert("Thanks for enrolling to " + this.title + ' course.');
  }
}
