import { Injectable } from '@angular/core';
import { userObject } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogged: boolean = false;
  currentUser: userObject;
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

  setUserData(name:string, pass:string){
    this.currentUser.name = name;
    this.currentUser.password = pass;
    return this.currentUser;
  }

  getUserData(){
    return this.currentUser;
  }
  
}
