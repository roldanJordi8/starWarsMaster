import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('alert') alert: ElementRef;

  newUser: User = {
    firstName: '',
    lastName: '',
    userName: '',
    password: null
  };
  submitted = false;
  users: User[];
  fieldTextType = false;
  usernameTook = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('LocalBBDDUsers'));
  }

  registerUser(myForm: NgForm): void {
    this.submitted = true;
    if (myForm.valid && this.checkUsername()) {
      this.users.push(this.newUser);
      this.submitted = false;
      localStorage.setItem('LocalBBDDUsers', JSON.stringify(this.users));
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }

  checkUsername(): boolean {
    if (this.users.find(a => a.userName === this.newUser.userName)) {
      this.usernameTook = true;
      return false;
    } else {
      return true;
    }
  }

  closeAlert(): void {
    this.usernameTook = false;
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }
}
