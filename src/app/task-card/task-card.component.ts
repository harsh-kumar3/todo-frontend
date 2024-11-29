import { Component, Input } from '@angular/core';
import { tasks } from '../app.interfaces';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
    @Input() task !: tasks;
    constructor(){
       console.log("Task Card Component : ",this.task)
     }

}
