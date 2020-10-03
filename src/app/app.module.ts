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
import { HomeMenuComponent } from './components/home-menu/home-menu.component';
import { StarshipDetailsComponent } from './components/ships/starship-details/starship-details.component';
import { NumberPipe } from './pipes/number.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ShipsComponent,
    StarshipsListComponent,
    StarshipComponent,
    FakeNavigationComponent,
    HomeMenuComponent,
    StarshipDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
