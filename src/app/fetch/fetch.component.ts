import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fetch',
  standalone: true,
  imports: [ CommonModule,RouterModule,HttpClientModule],
  templateUrl: './fetch.component.html',
  styleUrl: './fetch.component.css'
})
export class FetchComponent {
 constructor(public http: HttpClient){ }
 public todo : any = []
 ngOnInit(){
  this.http.get("https://dummyjson.com/todos").subscribe((data:any) =>{
    console.log(data);   
    this.todo = data.todos 
  }, (error)=>{
    console.log(error);    
  })
 }

}
