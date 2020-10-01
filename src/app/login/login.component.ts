import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  user: User = {
    firstName: '',
    lastName: '',
    userName: '',
    password: null
  };

  constructor() { }

  ngOnInit(): void {
  }

  loginUser(myForm: NgForm): void {
    this.submitted = true;
  }

}
