import {Component, OnInit} from '@angular/core';
import {MovieslistService} from '../../movieslist.service';
import {MoviesList} from '../../moviesList.entity';

// privé : non visible par le template
// public : visible par le template
// les services doivent être en privé, normalement ?
// le constructeur des composants ne contiendra que des injections de dépendances ?

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  moviesList: MoviesList[]; // l'entité MoviesList donc

  // tslint:disable-next-line:max-line-length
  // pour récupérer le service et l'utiliser, importé en haut, ça s'appelle une injection de dépendances [[private nomdevariable : nomduservice]]
  constructor(private moviesListService: MovieslistService) {
  }

  ngOnInit(): void {
    this.moviesList = this.moviesListService.flims;
  }

  getNbFilms() {
    return this.moviesList.length;
  }

  addTask() {
    this.moviesListService.addTask();
  }
}


