import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { ErrorComponent } from './error/error.component';
import { CourseGuardService } from "./course-guard.service";
import { CanDeactivateGuardService } from "./candeactivate-guard.service";
import { CourseResolveService } from "./course-resolve.service";
import { HomeRouteService } from "./canActivateGuard.service";
import { LoginComponent } from "./login/login.component";

const appRoute: Routes = [
    { path: '', canActivate:[HomeRouteService], component: HomeComponent },
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home',  canActivate:[HomeRouteService], component: HomeComponent },
    { path: 'about', canActivate:[HomeRouteService] , component: AboutComponent },
    { path: 'contact',canActivate:[HomeRouteService], canDeactivate:[CanDeactivateGuardService], component: ContactComponent },
    { path: 'courses', canActivate:[HomeRouteService], component: CoursesComponent},
    // {path: 'courses/course/:id', component: CourseComponent},
    {path: 'courses', canActivate:[HomeRouteService], canActivateChild: [CourseGuardService], children: [
            { path: 'course/:id', component: CourseComponent }
        ]
    },
    {path: 'accessdenied', component: LoginComponent},
    { path: '**', component: ErrorComponent },
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoute, {enableTracing: true})
    ],
    exports:[
        RouterModule
    ]

})
export class AppRoutingModule {

}