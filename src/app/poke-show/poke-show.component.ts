import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/pokemon';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-poke-show',
  templateUrl: './poke-show.component.html',
  styleUrls: ['./poke-show.component.scss']
})
export class PokeShowComponent implements OnInit {

  @ViewChild('myform')
  public myform ?:Form;

  public model = {
    comment: "",
    names: [
      { name: "" }
    ]
  };

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

  submit() {
    console.log(this.myform);
  }

  addName() {
    this.model.names.push({ name: "" });
  }

  removeName(index: number) {
    this.model.names.splice(index, 1);
  }

}
