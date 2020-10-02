import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShipsComponent } from './ships/ships.component';
import { StarshipsListComponent } from './ships/starships-list/starships-list.component';
import { StarshipComponent } from './ships/starships-list/starship/starship.component';
import { FormsModule } from '@angular/forms';
import { FakeNavigationComponent } from './fake-navigation/fake-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ShipsComponent,
    StarshipsListComponent,
    StarshipComponent,
    FakeNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
