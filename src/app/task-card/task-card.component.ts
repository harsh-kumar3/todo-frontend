import { Component, Input } from '@angular/core';
import { tasks } from '../app.interfaces';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
    @Input() task !: tasks;
    constructor(private taskService : TaskService){
       console.log("Task Card Component : ",this.task)
     }
    
    handleDelete(taskId: string): void {
      console.log("Task Id : ",taskId)
    }
    
    handleToggle(taskId: string): void {
      console.log("Task Id : ",taskId)
    }

    toggleCompletion(taskId : string) {
      this.taskService.toggleTask(taskId)
    }
}
