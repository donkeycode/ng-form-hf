import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from './models/pokemon';
import { PokeIdPipe } from './poke-id.pipe';

@Pipe({
  name: 'pokeImage',
})
export class PokeImagePipe implements PipeTransform {

  constructor(private pokeIdPipe: PokeIdPipe) {}

  transform(value: Pokemon): string {
    return `<img src="${environment.pokemonImageUrl.replace('{0}', this.pokeIdPipe.transform(value).padStart(3, '0') )}" />`;
  }

}
