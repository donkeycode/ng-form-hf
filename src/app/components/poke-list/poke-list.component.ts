import { Component, ViewChild } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokeItemComponent } from '../poke-item/poke-item.component';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {

  public cart: { [key:string]: number } = {};

  @ViewChild('item')
  public item ?:PokeItemComponent;

  public pokemons :Pokemon[] = [
    {
      name: 'Ratata'
    },
    {
      name: 'Bulbizar'
    }
  ];

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
