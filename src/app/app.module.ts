import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { ListeFilmsComponent } from './component/liste-films/liste-films.component';
import { DetailFilmComponent } from './component/detail-film/detail-film.component';
import { AjoutFilmComponent } from './component/ajout-film/ajout-film.component';
import { Erreur404Component } from './component/erreur404/erreur404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    AccueilComponent,
    ListeFilmsComponent,
    DetailFilmComponent,
    AjoutFilmComponent,
    Erreur404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
