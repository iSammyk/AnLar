import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-onefetch',
  standalone: true,
  imports: [CommonModule ,HttpClientModule],
  templateUrl: './onefetch.component.html',
  styleUrl: './onefetch.component.css'
})
export class OnefetchComponent {
  constructor(public routeParameter: ActivatedRoute, public http: HttpClient){}
  public id = this.routeParameter.snapshot.params['id'];
  public todo: any = {}
  ngOnInit(){
    console.log(this.id);    
    this.http.get("https://dummyjson.com/todos/" +this.id).subscribe((data:any) =>{
      this.todo = data;   
      console.log(this.todo);
      
    }, (error)=>{
      console.log(error);    
    })
  }
}
