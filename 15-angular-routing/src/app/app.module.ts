import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './Services/courses.service';
import { CourseComponent } from './courses/course/course.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CourseGuardService } from './course-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuardService } from './candeactivate-guard.service';
import { CourseResolveService } from './course-resolve.service';
import { HomeRouteService } from './canActivateGuard.service';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './loading.interceptor';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    CourseComponent,
    ErrorComponent,
    LoginComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }, 
  CoursesService, CourseGuardService, AuthService, CanDeactivateGuardService, CourseResolveService, HomeRouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
