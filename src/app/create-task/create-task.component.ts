import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { tasks } from '../app.interfaces';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule, CommonModule, JsonPipe],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {
  todayDate:any = new Date().toISOString().split('T')[0];
  constructor(private taskService : TaskService) {
  }

  formData : tasks = {
    taskName: '',
    description: '',
    category: '',
    dueDate: '',
    isComplete: false,
    createdAt : this.todayDate
  };

  submit(formValue : tasks){
    console.log(formValue)
    this.taskService.createTask(formValue)
  }
}
