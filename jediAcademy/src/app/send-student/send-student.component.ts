import { Student } from './../student/student.model';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'jad-send-student',
  templateUrl: './send-student.component.html',
  styleUrls: ['./send-student.component.css']
})
export class SendStudentComponent implements OnInit {

  constructor() { }

  newstudent: Student
  @Output() sendStudent = new EventEmitter<Student>()

  ngOnInit(): void {
  }

  newStudent(name: String, type: boolean){

    this.newstudent = {name: name, isJedi: type}
    this.sendStudent.emit(this.newstudent)
    
  }

}
