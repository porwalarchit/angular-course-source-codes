import { Component } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRouting';
  displayLoadingIndicator = false;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private router: Router){

  }

  ngOnInit(){
    this.activatedRoute.fragment.subscribe((value)=>{
      this.jumpTo(value);
    })

    this.router.events.subscribe((routerEvent)=>{
      if(routerEvent instanceof NavigationStart){
        this.displayLoadingIndicator = true;
      }
      if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
        this.displayLoadingIndicator = false;
      }
    })
  }

  jumpTo(section){
    document.getElementById(section).scrollIntoView({behavior: 'smooth'});
  }

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }
}
