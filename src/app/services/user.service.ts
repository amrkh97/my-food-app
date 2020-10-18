import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogged: boolean = false;
  constructor() { }

  getLogInStatus(){
    return this.isLogged;
  }

  setLogInStatus(newStatus:boolean){
    this.isLogged = newStatus;
  }

  toggleLogInStatus(){
    this.isLogged = !this.isLogged;
  }
}
