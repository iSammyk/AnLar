import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
constructor(public router: Router){}
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
  localStorage.setItem('infos', JSON.stringify(this.allUsers));
  this.router.navigate(['show-todo'])
}

delitem(i:number){
  // alert("works")
  this.allUsers.splice(i, 1)
}


ngOnInit(){
  this.allUsers = JSON.parse(localStorage.getItem('infos')!) || [];
  
}
}

