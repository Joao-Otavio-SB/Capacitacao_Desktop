import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  @Input() student: Student
  @Output() delStudent = new EventEmitter<Student>()

  ngOnInit(): void {

  }

  clicked(){
    console.log(`Student: ${this.student.name}`)
  }

  deleteStudent(){
    this.delStudent.emit(this.student)
  }

}
