import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,
     CommonModule, 
     MatIconModule, 
     MatButtonModule, 
     MatInputModule, 
     MatFormFieldModule, 
     MatSelectModule,
     MatTabsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  public currentUser: any;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(private router: Router, public currUser: StorageService) { }

  ngOnInit(): void {
    // const storedUser = localStorage.getItem('currentUser');
    this.currentUser = this.currUser.currUser() || null;
    // console.log(this.currentUser);
    
    // console.log(this.currUser.currUser());
    
  }
  toppings = new FormControl('');

  logout(){
    this.router.navigate(['login']);
    localStorage.removeItem('currentUser')
  }
}
