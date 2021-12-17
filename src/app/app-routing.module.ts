import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { DemoGuard } from './demo.guard';
import { HomeComponent } from './home/home.component';
import { PokeActionsComponent } from './poke-actions/poke-actions.component';
import { PokeShowComponent } from './poke-show/poke-show.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pokemons',
    component: PokeActionsComponent,
    children: [
      {
        path: '',
        component: PokeListComponent
      },
      {
        path: ':id',
        component: PokeShowComponent,
        canActivate: [ DemoGuard ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
