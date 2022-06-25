import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

declare let alertify: any; 
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  title = 'Film List';
  movies: Movie[];
  FilteredMovies: Movie[];
  popularMovies: Movie[];
  movieRepository: MovieRepository;
  today = new Date();

  filterText: string = '';

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
    this.FilteredMovies = this.movies;
  }

  ngOnInit(): void {}

  onInputChange() {
    this.FilteredMovies = this.filterText
      ? this.movies.filter(
          (m) =>
            m.title.indexOf(this.filterText) !== -1 ||
            m.description.indexOf(this.filterText) !== -1
        )
      : this.movies;
  }

  addToList($event: any, movie: Movie) {
    if($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = "Remove from List"
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');

      alertify.success(movie.title + ' Added to list!');

    } else {
      $event.target.innerText = "Add to List"
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');

      alertify.error(movie.title +' Removed from list')
    }
  }
}
