import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/pages/home-page/home-page.component";
import {PokemonPageComponent} from "./components/pages/pokemon-page/pokemon-page.component";
import {AboutComponent} from "./components/pages/about/about.component";

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'pokemon/:id',
    component: PokemonPageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
