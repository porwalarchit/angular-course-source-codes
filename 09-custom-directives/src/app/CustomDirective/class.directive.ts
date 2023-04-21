import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 
    
  }

  // There are 2 alternatives if we don't want to give our method name 'display'
  // 1-> Assign alias to display as class name like->  @Input('appClass') set display(value: Object){}
  // 2-> Assign the method name same as class name like->   @Input() set appClass(value: Object){}

  @Input() set display(value: Object){
    let entries = Object.entries(value);
    // console.log(entries);

    // [entry] === [className, condition] -> This is called as destructuring of array.
    for(let [className, condition] of entries){
      if(condition){
        this.renderer.addClass(this.element.nativeElement, className); // Both the classes .container and .change-font has been applied to the div.
      }
    }
  }

}
