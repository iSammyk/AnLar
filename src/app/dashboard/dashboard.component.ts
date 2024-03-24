import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  public currentUser: any;
  constructor(private router: Router, public currUser: StorageService) { }

  ngOnInit(): void {
    // const storedUser = localStorage.getItem('currentUser');
    this.currentUser = this.currUser.currUser() || null;
    // console.log(this.currentUser);
    
    // console.log(this.currUser.currUser());
    
  }

  logout(){
    this.router.navigate(['login']);
  }
}
