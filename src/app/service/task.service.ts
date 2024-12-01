import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { createTaskResponse, Task, tasks } from '../app.interfaces';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  baseUrl: string = 'http://localhost:5000/user/';
  authToken !: string | null
  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId : object) {
    if (isPlatformBrowser(this.platformId)) {
      this.authToken = localStorage.getItem('token')
    }
  }
  private allTask: tasks[] = [];
  

  getTasks() {
    const userTasks$ = this.http.get<tasks[]>(this.baseUrl);
    userTasks$.subscribe({
      next : (task) =>{
        this.allTask = task
      },
      error: (err) => {
        console.error('Error fetching tasks:', err);
      },
      complete : () =>{
        console.log("Get Task is Completed !!")
      }
    })
    return this.allTask;
  }

  createTask(task: Task) {
    if (!this.authToken) {
      console.error('No auth token found');
      return;
    }

    const createdTask$ = this.http.post<createTaskResponse>(
      this.baseUrl + 'createtask',
      {
        description: task.description,
        category: task.category,
        dueDate: task.dueDate,
      },
      {
        headers: {
          'auth-token': this.authToken,
        },
        responseType: 'json', 
      }
    );

    createdTask$.subscribe({
      next : (response) =>{
        console.log(response);
      },
      error : (err) =>{
        console.error("Error Occured while creating the task : ",err)
      },
      complete : () =>{
        console.log("Create Task Process Completed !!")
      }
    })
  }

  toggleTask(taskId: string): void {
    this.http.put(this.baseUrl + "isComplete", { taskId }).subscribe({
      next: (res: any) => {
        console.log("Task toggled successfully:", res);
      },
      error: (err) => {
        console.error("Error toggling task:", err);
      },
      complete: () => {
        console.log("Task toggle request completed.");
      },
    });
  }
  
}
