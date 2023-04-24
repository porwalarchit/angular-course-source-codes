import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-observables';

  myObservable = new Observable((observer)=>{
    console.log('Observable starts');
    setTimeout(()=>{
      observer.next("1");
    }, 3000)
    setTimeout(()=>{
      observer.next("3");
    }, 1000)
    setTimeout(()=>{
      observer.next("2");
    }, 2000)
    
    // observer.next("1");
    // observer.next("2");
    // observer.next("3");
    // observer.next("4");
    // observer.next("5");
  });

  ngOnInit(){
    this.myObservable.subscribe((val)=>{
      console.log(val);
    });
  }
}
