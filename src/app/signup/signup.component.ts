import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../app.interfaces';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  user: User = {          
    name: '',
    email: '',
    password: '',
  };

  constructor(private authService : AuthService){

  }

  userSignup(credential : User){
    console.log("Credential : ",credential)
    this.authService.signupUser(credential)
  }


}
