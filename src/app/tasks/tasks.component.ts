import { Component, OnInit } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { tasks } from '../app.interfaces';
import { JsonPipe } from '@angular/common';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskCardComponent, JsonPipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
  allTasks: tasks[] = [];
  constructor(private tasks: TaskService) {}
  ngOnInit(): void {
    this.allTasks = this.tasks.getTasks();
    console.log('All Tasks : ', this.allTasks);
  }
}
