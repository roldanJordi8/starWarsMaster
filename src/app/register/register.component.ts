import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newUser: User = {
    firstName: '',
    lastName: '',
    userName: '',
    password: null
  };
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registerUser(myForm: NgForm): void {
    this.submitted = true;
    if (myForm.valid) {
      this.submitted = false;
      this.router.navigate(['../'], { relativeTo: this.route });

    }
    // if (this.user.isExternal) {
    //   user.languages.map(a => a.isTranslator = true);
    // }
    // if (this.user.name !== "" && this.user.email !== "") {
    //   this.usersService
    //     .updateUser(user)
    //     .pipe(
    //       catchMessageError(error => {
    //         this.notifierService.warning(error);
    //       })
    //     )
    //     .subscribe(() => {
    //       this.router.navigate(["../"], { relativeTo: this.route });
    //     });
    // }

  }

}
