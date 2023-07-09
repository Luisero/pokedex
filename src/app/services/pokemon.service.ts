import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Pokemon} from "../models/Pokemon";
import {Response} from "../models/Response";
import {PokemonType} from "../models/PokemonType";


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseApiUrl: string = 'https://pokeapi.co/api/v2/pokemon';
  allPokemons: Pokemon[] = [];
  constructor(
    private http: HttpClient
  ) { }

    getPokemonByUrl(url: string): Observable<Pokemon> {

     let pokemon_request = this.http.get<Observable<Pokemon>>(url);
     let pokemon: Subject<Pokemon> = new Subject<Pokemon>();
     pokemon_request.subscribe((response: any) => {
       let types: PokemonType[] = []

       response.types.forEach((type: any)=>{
         types.push(type.type.name);
       })

       let pokemon_data = {
         id: response.id,
         name: response.name,
         url: response.forms[0].url,
         sprite: response.sprites.front_default,
         types: types

       }
       pokemon.next(pokemon_data);

     })

      return pokemon.asObservable();

   }
  getAllPokemons(): Pokemon[]{
    const url = this.baseApiUrl + '/?limit=151';
    let pokemons_request:Observable<any> = this.http.get<Observable<Response>>(url);
    let pokemons_data;
    pokemons_request.subscribe((response_data: Response)=>{
      pokemons_data = response_data
      if(pokemons_data){
        pokemons_data.results.forEach((pokemon_data)=>{
          this.getPokemonByUrl(pokemon_data.url).subscribe((pokemon)=>{
            this.allPokemons.push(pokemon);
          });


        });
      }
    })

    return this.allPokemons;

  }
}
