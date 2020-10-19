import { Injectable } from '@angular/core';
import { userObject } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogged: boolean = false;
  currentUser: userObject = new userObject("","");
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
    console.log(this.currentUser);
    console.log("--------------");
    this.currentUser.name = name;
    this.currentUser.password = pass;
    console.log(this.currentUser);
    return this.currentUser;
  }

  getUserData(){
    return this.currentUser;
  }
  
  validateUser(userName:string, pass:string, repass?:string){
    
    if(!repass){
      repass = pass;
    }
    console.log("Inside user services!");
    console.log("userName:"+userName);
    console.log("pass"+pass);
    console.log("repass"+repass);

    if(userName && pass === repass && pass.length >= 8){
      this.setUserData(userName, pass);
      return true;
    }else{
      return false;
    }
  }

}
