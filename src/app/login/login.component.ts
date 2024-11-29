import { Component } from '@angular/core';
import { User } from '../app.interfaces';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: User = {
    email: '',
    password: '',
  };

  constructor(private authService : AuthService){

  }

  userLogin(credential : User){
    console.log("Credential : ",credential)
    this.authService.loginUser(credential)
  }
}
