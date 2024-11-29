import { Injectable } from '@angular/core';
import { tasks } from './app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TaskSharedServiceService {
  private allTask : tasks[] = []

  constructor() { }

  setTasks(formValue : tasks){
    console.log("Set Tasks : ", formValue)
    this.allTask.push(formValue)
  }

  getTasks(){
    return this.allTask;
  }
}
