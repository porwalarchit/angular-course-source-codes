import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";

export class CanDeactivateGuardService implements CanDeactivate<ContactComponent>{
    canDeactivate(component: ContactComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) 
    {
        return component.canExit();
    }
}