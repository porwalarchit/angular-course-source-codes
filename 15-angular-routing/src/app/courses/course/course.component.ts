import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course;
  courseId;
  routeparamObservable;
  editMode: boolean = false;
  dataFromQuery;

  constructor(private activatedRoute: ActivatedRoute, private service: CoursesService, private router: Router) { }

  ngOnInit(): void {
  //   this.courseId = this.activatedRoute.snapshot.paramMap.get('id');

  //   // Old Approach
  //   // this.courseId = this.activatedRoute.snapshot.params['id'];
  //   this.course = this.service.courses.find(x => x.id == this.courseId);
    this.routeparamObservable = this.activatedRoute.paramMap.subscribe((param)=>{
      this.courseId = param.get('id');
      this.course = this.service.courses.find(x => x.id == this.courseId);
    })

    // snapshot
    // this.dataFromQuery = this.activatedRoute.snapshot.queryParamMap.get('edit');

    this.activatedRoute.queryParamMap.subscribe((param)=>{
      this.editMode = Boolean(param.get('edit'));
    })
    console.log(this.dataFromQuery);
  }
  
  ngOnDestroy(){
    this.routeparamObservable.unsubscribe();
  }

  appendQueryParam(){
    this.dataFromQuery = this.router.navigate(['/courses/course', this.courseId], {queryParams: {edit: false}});
  }


}
