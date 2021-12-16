import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-poke-item',
  templateUrl: './poke-item.component.html',
  styleUrls: ['./poke-item.component.scss']
})
export class PokeItemComponent {

  @Output()
  public cartAdded :EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  @Input()
  public pokemon !:Pokemon;

  addToCart() {
    console.log(`Pokemon ${this.pokemon.name} added to cart`);
    this.cartAdded.emit(this.pokemon);
  }
}
