import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
public allUsers : any[] = [];
public User: any = {};
public id : number = 0


signUp() {
  if (this.User.email && this.User.password && this.User.gender) {
    this.id++;
    this.allUsers.push({
      email: this.User.email,
      password: this.User.password,
      gender: this.User.gender,   
      id : this.id   
    });
    this.User = {}; 
  }
}

delitem(i:number){
  // alert("works")
  this.allUsers.splice(i, 1)
}
}
