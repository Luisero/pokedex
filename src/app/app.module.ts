import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { PokemonPageComponent } from './components/pages/pokemon-page/pokemon-page.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PokemonPageComponent,
    PokemonComponent,
    NavbarComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
