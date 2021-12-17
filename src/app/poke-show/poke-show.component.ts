import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/pokemon';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-poke-show',
  templateUrl: './poke-show.component.html',
  styleUrls: ['./poke-show.component.scss']
})
export class PokeShowComponent implements OnInit {

  public pokemon ?: Pokemon;

  constructor(private pokeApi: PokemonApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.pokeApi.getOne(
      this.route.snapshot.paramMap.get('id')!
    )  //this.route.snapshot.params['id'])
      .subscribe(response => {
        this.pokemon = response;
      });
  }

}
