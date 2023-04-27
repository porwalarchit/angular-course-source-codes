import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent implements OnInit{
  title = 'AngularPipes';
  students: Student[];
  totalMarks: number;
  filterText: string = ''

  constructor(private studentService: StudentService){

  }
  ngOnInit(){
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
  }

  AddDummyStudent(){
    let studentCopy = Object.assign([], this.students);
    studentCopy.push({name:'TEST', course: 'TEST', marks: 520, DOB: new Date(), gender: 'female'});
    this.students = studentCopy
  }
  changeGender(){
    let studentCopy = Object.assign([], this.students);
    studentCopy[0].gender = 'female';
    this.students = studentCopy;
  }
}
