import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  slogan: string = 'Your one stop shop for everything.';
  getSlogan(){
    return "This is a new Slogan for the web application"; 
  }

  source: string = "https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg";
  
}
