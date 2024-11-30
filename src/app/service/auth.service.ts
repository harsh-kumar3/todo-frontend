import { inject, Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { User } from '../app.interfaces';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'http://localhost:5000/auth/';
  isLoggedIn = signal(false);
  router : Router = inject(Router)

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId : object) {
    if (isPlatformBrowser(this.platformId)) {
      this.isLoggedIn.set(!!localStorage.getItem('token'));
    }
  }

  loginUser(credential: User) { 
    if (!isPlatformBrowser(this.platformId)) return;
    this.http.post<{success: boolean; authtoken: string}>(this.baseUrl + "login",{
      email: credential.email,
      password: credential.password  
    },{responseType : "json"}).subscribe({
      next : (user) => {
        if(user.success){
          console.log('user : ',user)
          localStorage.setItem('token',user.authtoken)
          console.log('Login successful, token stored.');
          this.router.navigate(['/']);
        }else{
          console.log('Login failed, no token received.');
        }
      },
      error : (err) =>{
        console.log("Login Error : ",err)
      },
      complete : () =>{
        console.log('Login process completed.');
      }
    })
    this.isLoggedIn.set(true)
  }

  signupUser(credential: User) {
    if (!isPlatformBrowser(this.platformId)) return;
    this.http.post<{ success: boolean; authToken: string }>(this.baseUrl + "signup", {
      name: credential.name,
      email: credential.email,
      password: credential.password
    },{responseType:"json"}).subscribe({
      next: (user) => {
        if (user.success) {
          localStorage.setItem('token', user.authToken);
          console.log('Signup successful, token stored.');
          this.router.navigate(['/'])
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
    this.isLoggedIn.set(true)
  }

  logout(){
    if (!isPlatformBrowser(this.platformId)) return;
    localStorage.removeItem('token')
    this.isLoggedIn.set(false)
    this.router.navigate(['/signup'])
    console.log('Logout Successfully')
  }
}
