import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable,throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {
  url = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  getMovies(categoryId: number): Observable<Movie[]> {

    let newUrl = this.url;

    if(categoryId) {
      newUrl += '?categoryId=' +categoryId;

    }

    return this.http
      .get<Movie[]>(newUrl)
      .pipe(
        tap((data) => console.log(data)),
        catchError(this.handleError)
        );
  }

  getMovieById(movieId:number): Observable<Movie> {
    return this.http.get<Movie>(this.url + "/" + movieId).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
        //client yada network
        console.log("error: " + error.error.message)
    } else {
        //backend
        switch(error.status) {
            case 404:
                console.log("Not found");
                break;
            case 403:
                console.log("Access denied");
                break;
            case 501:
                console.log("Interval error");
                break;
            default:
                console.log("Unknown error");

        }
    }
    return throwError(()=>"Error");
  }
}
