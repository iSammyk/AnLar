import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
   public allInfo(){
    return JSON.parse(localStorage.getItem('infos') !) || []
  }

  public currUser(){
    return JSON.parse(localStorage.getItem('currentUser')!)
  }
}
