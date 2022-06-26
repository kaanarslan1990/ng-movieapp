import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  title = 'Film List';
  movies: Movie[] = [];
  FilteredMovies: Movie[] = [];
  popularMovies: Movie[]=[];
  today = new Date();

  filterText: string = '';

  constructor(private alertify: AlertifyService, private http: HttpClient) {
   
  }

  ngOnInit(): void {
    this.http.get<Movie[]>('http://localhost:3000/movies').subscribe((data) => {
      this.movies = data;
      this.FilteredMovies = this.movies;

      console.log(this.movies);
      console.log(this.FilteredMovies);
    });


    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {console.log(data)})
  }

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
    if ($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = 'Remove from List';
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');

      this.alertify.success(movie.title + ' Added to list!');
    } else {
      $event.target.innerText = 'Add to List';
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');

      this.alertify.error(movie.title + ' Removed from list');
    }
  }
}
