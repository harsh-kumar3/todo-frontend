import { Inject, Injectable } from '@angular/core';
import { User } from '../app.interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'http://localhost:5000/auth/';

  constructor(private http: HttpClient) {}

  loginUser(credential: User) {  }

  signupUser(credential: User) {
    this.http.post<{ success: boolean; authToken: string }>(this.baseUrl + "signup", {
      name: credential.name,
      email: credential.email,
      password: credential.password
    },{responseType:"json"}).subscribe({
      next: (user) => {
        if (user.success) {
          localStorage.setItem('token', user.authToken);
          console.log('Signup successful, token stored.');
        } else {
          console.log('Signup failed, no token received.');
        }
      },
      error: (error) => {
        console.error('Signup error', error);
      },
      complete: () => {
        console.log('Signup process completed.');
      }
    });
    
  }
}