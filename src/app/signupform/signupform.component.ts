import { Component, OnInit } from '@angular/core';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { User } from './../User';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
myname1:any[];
  constructor() { }
  //Property for the gender
  private gender: string[];
  //Property for the user
  private user:User;

  ngOnInit() {
  

this.gender =  ['Male', 'Female', 'Others'];
    //Create a new user object
    this.user = new User({
        email:"", password: { pwd: "" , confirm_pwd: ""}, 
        gender: this.gender[0], terms: false});
    }
 
  
}
