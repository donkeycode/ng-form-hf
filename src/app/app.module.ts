import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeItemComponent } from './components/poke-item/poke-item.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { CardComponent } from './components/card/card.component';
import { AppColorDirective } from './app-color.directive';
import { HttpClientModule } from '@angular/common/http';
import { PokeImagePipe } from './poke-image.pipe';
import { HomeComponent } from './home/home.component';
import { PokeShowComponent } from './poke-show/poke-show.component';
import { PokeActionsComponent } from './poke-actions/poke-actions.component';
import { PokeIdPipe } from './poke-id.pipe';
import { FormsModule } from '@angular/forms';
import { ConsolePipe } from './console.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokeItemComponent,
    PokeListComponent,
    CardComponent,
    AppColorDirective,
    PokeImagePipe,
    HomeComponent,
    PokeShowComponent,
    PokeActionsComponent,
    PokeIdPipe,
    ConsolePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
