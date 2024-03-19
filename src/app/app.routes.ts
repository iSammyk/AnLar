import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';

export const routes: Routes = [
    {path:"", pathMatch:"full", redirectTo:"home"},
    {path: "home", component: HomeComponent},
    {path: "show-todo", component: ShowTodoComponent}
];
