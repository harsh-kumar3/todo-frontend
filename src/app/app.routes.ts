import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
        path : '',
        component : TasksComponent
    },
    {
        path : 'create',
        component : CreateTaskComponent
    },
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'signup',
        component : SignupComponent
    }
];
