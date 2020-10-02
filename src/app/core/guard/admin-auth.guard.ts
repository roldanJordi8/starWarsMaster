import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  user: User;
  users: User[];

  constructor(
    private router: Router) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    this.user = JSON.parse(localStorage.getItem('UserLogin'));
    if (!(this.checkLogin())) {
      localStorage.setItem('UserLogin', JSON.stringify([]));
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }

  checkLogin(): boolean {
    this.users = JSON.parse(localStorage.getItem('LocalBBDDUsers'));
    if (this.users.find(a => a.userName === this.user.userName && a.password === this.user.password)) {
      return true;
    } else {
      return false;
    }
  }
}
