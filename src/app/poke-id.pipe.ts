import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './models/pokemon';

@Pipe({
  name: 'pokeId'
})
@Injectable({
  providedIn: 'root'
})
export class PokeIdPipe implements PipeTransform {

  transform(pokemon: Pokemon): string {
    if (pokemon.id) {
      return pokemon.id.toString();
    }

    if (!pokemon.url) {
      return '';
    }

    const pokeId = pokemon.url.match(/\/(\d+)\/$/);

    if (!pokeId) {
      return '';
    }

    return pokeId[1];
  }

}
