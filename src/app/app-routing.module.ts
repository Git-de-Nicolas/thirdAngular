import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { ListeFilmsComponent } from './component/liste-films/liste-films.component';
import { DetailFilmComponent } from './component/detail-film/detail-film.component';
import { AjoutFilmComponent } from './component/ajout-film/ajout-film.component';
import {Erreur404Component} from './component/erreur404/erreur404.component';


const routes: Routes = [ // putain de majuscule de merde
  {path: '', component: AccueilComponent },
  {path: 'liste-des-films', component: ListeFilmsComponent },
  {path: 'detail-un-film/:id', component: DetailFilmComponent},
  {path: 'ajout-un-film', component: AjoutFilmComponent },
  {path: 'not-found', component: Erreur404Component},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
