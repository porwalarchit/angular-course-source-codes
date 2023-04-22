import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private template: TemplateRef<any>,private viewContainer: ViewContainerRef) { 

  }

  @Input('appIf') set displayView(condititon: boolean){
    if(condititon){
      this.viewContainer.createEmbeddedView(this.template);
    }
    else[
      this.viewContainer.clear()
    ]
  }

}
