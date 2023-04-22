import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomDirectives';
  
  active: boolean = true;

  display: boolean = false;

  displayNotice(){
    this.display = true;
  }
}
