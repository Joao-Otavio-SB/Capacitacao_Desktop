import { TaskDialogComponent } from './../task-dialog/task-dialog.component';
import { TaskService } from './../services/task.service';
import { Task } from './../models/task.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators' 
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  task$!: Observable<Task[]>;

  selectedTask!: Task;
  loading = true

  constructor(private taskService: TaskService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.task$ = this.taskService.tasks.valueChanges();

    this.task$
      .pipe(take(1))
      .subscribe(() => this.loading = false)
  }

  onPerformTask(task: Task): void {
    task.done = !task.done
    this.taskService.update(task)
  }

  showDialog(task?: Task): void {
    const config: MatDialogConfig<any> = (task) ? {data: {task}} : {data: null}
    this.dialog.open(TaskDialogComponent, config)
  }

  onDelete(task: Task): void{
    this.taskService.delete(task)
  }
}
