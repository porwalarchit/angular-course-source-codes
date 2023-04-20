import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, AfterContentInit,AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked{
  @Input() value: string = "proacademy";

  // Constructor() -> that will get invoked everytime the component class is instantiated.
  constructor(){
    console.log("Constructor called!!");
    // console.log(this.value);
  }

  // First lifecycle hook that gets called.
  // ngOnChanges()-> gets called everytime the value of the Input bound property changes.
  // Not gets called when the value is not changed.
  ngOnChanges(change: SimpleChanges){
    console.log("ngOnChanges called!!");
    console.log(change);
  }

  // ngOnInit()-> Only gets called once, but, by the time it gets called the input properties of the components are updated.
  ngOnInit(){
    console.log('ngOnInit Called!!');
    // console.log(this.value);
  }

  // ngDoCheck()-> Gets called everytime the change detection cycle runs, even if, there is no change.
  ngDoCheck(){
    console.log('ngDoCheck Called!!');
  }

  // ngAfterContentInit()-> called when the component's projected content has been fully initialized.
  // Only gets called for the first lifecycle change detection.
  ngAfterContentInit(){
    console.log('ngAfterContentInit called!')
  }

  // ngAfterContentChecked()-> called when the component's projected content has been fully initialized.
  // Gets called everytime for the first lifecycle change detection unlike ngAfterContentInit().
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called!!");
  }

  // Gets called only once.
  ngAfterViewInit(){
    console.log("ngAfterViewInit called!!");
  }

  // Gets called for every change in the view.
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called!!");
  }

  // Gets invoked right before the object gets destroyed.
  ngOnDestroy(){
    console.log("ngOnDestroy called!!")
  }
}
