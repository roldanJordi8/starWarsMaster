import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';

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
    password: ''
  };
  users: User[];
  fieldTextType = false;
  errorLogin = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('LocalBBDDUsers'));
    localStorage.setItem('UserLogin', JSON.stringify([]));
  }

  loginUser(myForm: NgForm): void {
    this.submitted = true;
    if (myForm.valid && this.checkLogin()) {
      this.router.navigate(['../ships/list'], { relativeTo: this.route });
    }
  }

  closeAlert(): void {
    this.errorLogin = false;
  }

  checkLogin(): boolean {
    if (this.users.find(a => a.userName === this.user.userName && a.password === this.user.password)) {
      localStorage.setItem('UserLogin', JSON.stringify(this.user));
      return true;
    } else {
      this.errorLogin = true;
      return false;
    }
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

}
