import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, from, interval, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'angular-observables';

  constructor(private dataService: DataService){

  }

  // WAY 1- Using Observable Constructor.
  // myObservable = new Observable((observer)=>{
  //   console.log('Observable starts');
  //   setTimeout(()=>{observer.next("1")}, 1000);
  //   setTimeout(()=>{observer.next("2")}, 2000);
  //   setTimeout(()=>{observer.next("3")}, 3000);

  //   // Create an Error.
  //   // setTimeout(()=>{observer.error(new Error ('Something went wrong! Please try again later.'))}, 3000);

  //   setTimeout(()=>{observer.next("4")}, 4000);
  //   setTimeout(()=>{observer.next("5")}, 5000);

  //   // Emitting a complete signal.
  //   setTimeout(()=>{observer.complete()}, 6000);

  //   // observer.next("1");
  //   // observer.next("2");
  //   // observer.next("3");
  //   // observer.next("4");
  //   // observer.next("5");
  // });


  // WAY 2- Using CREATE METHOD
  //   myObservable = Observable.create((observer: {
  //     complete: any; next: (arg0: string) => void; error: (arg0: Error) => void; 
  // })=>{
  //     setTimeout(()=>{observer.next("A")}, 1000);
  //     setTimeout(()=>{observer.next("B")}, 2000);
  //     setTimeout(()=>{observer.next("C")}, 3000);
  //     setTimeout(()=>{observer.next("D")}, 4000);

  //     // Error
  //     // setTimeout(()=>{observer.error(new Error ('Something went wrong! Please try again later.'))}, 4000);
  //     setTimeout(()=>{observer.next("E")}, 5000);

  //     // Complete signal
  //     setTimeout(()=>{observer.complete()}, 6000);
  //   });
  array1 = [1, 2, 3, 4, 5];
  array2 = ['A', 'B', 'C'];

  // WAY 3- Using of Operator
  // myObservable = of(this.array1, this.array2, 20, 48.24, "Hello");

  // WAY 4- USING FROM operator.
  // myObservable = from(this.array1)
  // .pipe(map((val) => {
  //   return val * 5;
  // }), filter((val)=>{
  //   return val>10;
  // })
  // );

  // Returns values multiplied by 5.
  // multiplieddata = this.myObservable.pipe(map((val) => {
  //   return val * 5;
  // }))

  // Returns filtered values that are greatar than 10.
  // filtererddata = this.multiplieddata.pipe(filter((val)=>{
  //   return val>10;
  // }))

  counterObservable = interval(1000);
  counterSub: Subscription = new Subscription;

  ngOnInit() {
    // this.myObservable.subscribe((val) => {
    //   console.log(val);
    // }, (error) => {
    //   console.log(error.message);
    // }, () => {
    //   console.log("Observables has completed emitting all values.")
    // });
  }

  unsubscribe(){
    this.counterSub.unsubscribe();
    console.log("Successfully unsubscribed from the event.");
  }

  subscribe(){
    console.log("Successfully subscribed for the event ")
    this.counterSub = this.counterObservable.subscribe((val)=>{
      console.log(val);
    })
  }
}
