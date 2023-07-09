import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../../services/pokemon.service";
import {Pokemon} from "../../../models/Pokemon";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  allPokemons: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.allPokemons = this.pokemonService.getAllPokemons();

  }



}
