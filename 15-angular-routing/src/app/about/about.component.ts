import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  constructor(private route: Router, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(){

  }

  navigateToHome(){
    // this.route.navigate(['home']); // Absolute routing: http://localhost:4200/home

    // this.route.navigate(['home'], {relativeTo: this.activatedRoute}); // Relative routing: http://localhost:4200/about/home
    
    this.route.navigateByUrl('home'); // Absolute routing: http://localhost:4200/home
  }
}
