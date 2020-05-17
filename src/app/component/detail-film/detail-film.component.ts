import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MoviesList} from '../../moviesList.entity';
import {MovieslistService} from '../../movieslist.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {

  moviesList: MoviesList;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private MoviesListService: MovieslistService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.moviesList = this.MoviesListService.getMovie(id);
  }

}
