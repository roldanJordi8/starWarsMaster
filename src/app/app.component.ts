import { Component, OnInit } from '@angular/core';
import { User } from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'star-wars-master-angular';
  // users: User[] = [];

  ngOnInit(): void {
    // this.users[0] = { firstName: 'Jordi', lastName: 'Roldan', userName: 'jordi.roldan', password: 'Hola' };
    // this.users[1] = { firstName: 'Xavi', lastName: 'Becerra', userName: 'xavi.becerra', password: 'Hola2' };

    // localStorage.setItem('LocalBBDDUsers', JSON.stringify(this.users));
  }
}
