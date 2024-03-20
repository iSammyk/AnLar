import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public users: any[] = [];
  public user: any = {};

  constructor(private router: Router) {
    const storedUsers = localStorage.getItem('infos');
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
  }

  login() {
    const foundUser = this.users.find(u => u.email === this.user.email && u.password === this.user.password);
    if (foundUser) {
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      this.router.navigate(['dash']);
    } else {
      alert('Invalid email or password');
    }
  }
}
