import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(public router: Router) {}

  public allUsers: any[] = [];
  public User: any = {};
  public id: number = 0;

  signUp() {
    // Validate the form fields
    if (this.User.username && this.User.email && this.User.password && this.User.gender) {
      this.id++;
      this.allUsers.push({
        username: this.User.username,
        email: this.User.email,
        password: this.User.password,
        gender: this.User.gender,
        id: this.id
      });
      this.User = {};
      localStorage.setItem('infos', JSON.stringify(this.allUsers));
      
      // Navigate to the login page after successful signup
      this.router.navigate(['login']);
    } else {
      // Handle case where form fields are not filled
      alert('Please fill in all required fields.');
    }
  }
}
