import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get<any>(environment.pokemonApiUrl + 'pokemon?limit=100');
  }

  getOne(id: string | number) {
    return this.http.get<any>(environment.pokemonApiUrl + 'pokemon/' + id);
  }
}
