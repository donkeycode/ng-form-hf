import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from './models/pokemon';
import { PokeIdPipe } from './poke-id.pipe';

@Pipe({
  name: 'pokeImage',
})
export class PokeImagePipe implements PipeTransform {

  constructor(private pokeIdPipe: PokeIdPipe) {}

  transform(pokemon: Pokemon): string {
    return `<img src="${environment.pokemonImageUrl.replace('{0}', this.pokeIdPipe.transform(pokemon).padStart(3, '0') )}" />`;
  }

}
