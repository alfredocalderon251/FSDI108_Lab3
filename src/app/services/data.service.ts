import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users:User[]=[];
  constructor() { }

  public sayHello(){
    console.log("Hello from a Service");

  }

  public saveUser(theNewUser){
    //get a user and add it to the array
    this.users.push(theNewUser);

  }

  public getAllUsers(){
    return this.users;
  }
}
