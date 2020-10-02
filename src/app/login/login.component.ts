import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('alert', { static: true }) alert: ElementRef;

  submitted = false;
  user: User = {
    firstName: '',
    lastName: '',
    userName: '',
    password: ''
  };
  users: User[];

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
      this.router.navigate(['../ships'], { relativeTo: this.route });
    }
    this.submitted = false;

  }

  closeAlert(): void {
    this.alert.nativeElement.classList.add('fade');
  }

  checkLogin(): boolean {
    if (this.users.find(a => a.userName === this.user.userName && a.password === this.user.password)) {
      localStorage.setItem('UserLogin', JSON.stringify(this.user));
      return true;
    } else {
      this.alert.nativeElement.classList.add('show');
      this.alert.nativeElement.classList.remove('fade');
      return false;
    }
  }

}
