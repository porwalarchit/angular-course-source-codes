import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'pink';

  @HostBinding('style.backgroundColor') background: string = this.defaultColor;
  @HostBinding('style.border') border: string = 'none';

  ngOnInit(){
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(){
    this.background = this.highlightColor,
    this.border = 'black 2px solid'
  }

  @HostListener('mouseleave') mouseLeave(){
    this.background = this.defaultColor,
    this.border = 'none'
  }
}
