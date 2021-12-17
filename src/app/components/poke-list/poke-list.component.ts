import { Component, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonApiService } from 'src/app/pokemon-api.service';
import { PokeItemComponent } from '../poke-item/poke-item.component';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public cart: { [key:string]: number } = {};

  @ViewChild('item')
  public item ?:PokeItemComponent;

  public pokemons :Pokemon[] = [
    {
      name: 'Ratata',
      url: 'string'
    }
  ];

  constructor(private pokemonApi : PokemonApiService) {}

  ngOnInit() {
    this.pokemonApi.getPokemons().subscribe(response => {
      this.pokemons = response.results;
    });
  }

  onClick() {
    console.log(this.item);
  }

  onCartAdded($event: Pokemon) {
    if (!this.cart[$event.name]) {
      this.cart[$event.name] = 0;
    }

    this.cart[$event.name]++;

    console.log(this.cart);
  }
}
