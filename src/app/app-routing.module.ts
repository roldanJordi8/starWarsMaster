import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/admin-auth.guard';
import { FakeNavigationComponent } from './components/fake-navigation/fake-navigation.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShipsComponent } from './components/ships/ships.component';
import { StarshipDetailsComponent } from './components/ships/starship-details/starship-details.component';
import { StarshipsListComponent } from './components/ships/starships-list/starships-list.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'ships',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'list',
        component: ShipsComponent
      },
      {
        path: ':id',
        component: StarshipDetailsComponent
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'fakeNavigation',
    component: FakeNavigationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
