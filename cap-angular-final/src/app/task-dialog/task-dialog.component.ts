import { TaskService } from './../services/task.service';
import { Task } from './../models/task.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css'],
})
export class TaskDialogComponent implements OnInit {
  dialogTitle = 'New Task';
  task: Task = {
    title: '',
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private taskService: TaskService,
    private dialogRef: MatDialogRef<TaskDialogComponent>
  ) {}

  ngOnInit(): void {
    if(this.data){
      this.dialogTitle = 'Update Task'
      this.task = this.data.task
    }
  }

  onSave() {
    if(this.data){
      this.taskService.update(this.task).then(() => {
        this.dialogRef.close()
      })
    }else{
      this.taskService.create(this.task).then(() => {
        this.dialogRef.close();
      });
    }
  }

  onDelete(){
    
  }
}
