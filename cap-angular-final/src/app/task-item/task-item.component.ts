import { Task } from './../models/task.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task!: Task
  @Output() selectTask = new EventEmitter<Task>()
  @Output() performTask = new EventEmitter<Task>()

  executeAction(action: string): void {
    action === 'select' ? this.selectTask.emit(this.task) : this.performTask.emit(this.task)
  }

}
