import {Injectable} from '@angular/core';
import {MoviesList} from './moviesList.entity';

@Injectable({
  providedIn: 'root'
})
export class MovieslistService {

  flims: MoviesList[];

  constructor() {
    this.flims = [
      {
        id: 46546154165,
        title: 'The Godfather',
        description: 'En 1945, à New York, les Corleone sont une des 5 familles de la mafia. Don Vito Corleone, `parrain\' de cette famille, ' +
          'marie sa fille à un bookmaker. Sollozzo, `parrain\' de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue, mais celui-ci refuse.',
        year: 1972,
        coverUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQyO8trmFbGTJIY6MaIFqzfPB6hW8UFCAYxTqtdKWGz7EJ6Jt-d'
      },
      {
        id: 12351465165,
        title: 'Eternal sunshine of the spotless mind',
        // tslint:disable-next-line:max-line-length
        description: 'Joel et Clementine ne voient plus que les mauvais côtés de leur tumultueuse histoire d\'amour, au point que celle-ci ' +
          'fait effacer de sa mémoire toute trace de cette relation.',
        year: 2004,
        coverUrl: 'https://fr.web.img5.acsta.net/medias/nmedia/18/35/40/09/19253739.jpg'
      },
      {
        id: 841654651465,
        title: 'La cité de la peur',
        description: 'Odile Deray, attachée de presse, vient au Festival de Cannes pour présenter le film "Red is Dead". ' +
          'Mais les projectionnistes du long-métrage en question meurent chacun leur tour dans d\'étranges circonstances...',
        year: 1994,
        coverUrl: 'http://fr.web.img2.acsta.net/r_1920_1080/pictures/19/05/03/14/30/1132544.jpg'
      }
    ];
  }

  addTask() {
    this.flims.unshift({description: 'résumé', id: Date.now(), year: 2020, title: 'film ajouté via le click'});
  }

  getMovie(idx: number): MoviesList {
    return this.flims[idx];
  }

}
