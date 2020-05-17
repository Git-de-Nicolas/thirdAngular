import {Component, OnInit} from '@angular/core';
import {MovieslistService} from '../../movieslist.service';
import {MoviesList} from '../../moviesList.entity';

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.component.html',
  styleUrls: ['./liste-films.component.css']
})
export class ListeFilmsComponent implements OnInit {

  MoviesList: MoviesList[];

  moviesListService: MovieslistService; // variable accessible pour la classe [de type : movieslist.service.ts ]

  constructor(moviesListService: MovieslistService) {
    this.moviesListService = moviesListService; // celle qui est en paramètre ?
  }

  ngOnInit(): void {
    this.MoviesList = this.moviesListService.flims;
  }

}
