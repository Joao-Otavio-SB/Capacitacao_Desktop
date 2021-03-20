import { Student } from './student/student.model';
import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  students: Student[] = [
    {name: 'Luke', isJedi: true, temple: 'Coruscant'},
    {name: 'Leia', isJedi: false},
    {name: 'Han Solo', isJedi: false}
  ]

  addStudent(send: Student){
    this.students.push(send)
  }

  deleteStudent(del: Student){
    let pos = this.students.indexOf(del)
    this.students.splice(pos, 1)
  }

  delAll(){
    this.students = []
  }

}
