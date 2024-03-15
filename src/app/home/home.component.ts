import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 public name = "testing"
 private country = "ghana"  

 public myText: string = ""
public alluser: Array<string> = []
 
//  typeSomething(ev:any){
//    this.myText = ev.target.value
//   }
  doSomething(){
   alert(this.myText)
  }
  addUser(){
    this.alluser.push(this.myText)
    console.log(this.alluser);     
  }

  delitem (i:number){
    this.alluser.splice(i, 1);
  }
  edititem(i:number){
    let myValue:any = prompt ("enter your value");
    this.alluser[i] = myValue
  }
  
 ngOnInit(){
  console.log(this.country);
  
 }
}
