import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ShipsComponent } from './components/ships/ships.component';
import { StarshipsListComponent } from './components/ships/starships-list/starships-list.component';
import { StarshipComponent } from './components/ships/starships-list/starship/starship.component';
import { FormsModule } from '@angular/forms';
import { FakeNavigationComponent } from './components/fake-navigation/fake-navigation.component';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
