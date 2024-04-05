import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guard/auth.guard';
import { FetchComponent } from './fetch/fetch.component';
import { OnefetchComponent } from './onefetch/onefetch.component';

export const routes: Routes = [
    {path:"", pathMatch:"full", redirectTo:"app"},
    {path: "home", component: HomeComponent},
    {path: "show-todo", component: ShowTodoComponent},
    {path: "signup", component: SignupComponent},
    {path: "login", component: LoginComponent},
    {path: "fetch", component:FetchComponent},
    {path:"onefetch/:id", component: OnefetchComponent},
    {path: "dash", component: DashboardComponent, canActivate: [authGuard]}
];
