import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, tap, throwError } from 'rxjs';
import { AuthResponse } from '../models/AuthResponse';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_key ="AIzaSyBqjn1TUeOvNQ5ugGNrV_IX64QEMfWepps"

  user = new Subject<User>();

  constructor(private http: HttpClient) { }


  signUp(email: string, password: string) {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap(response => {
        const expirationDate =new Date(new Date().getTime() + (+response.expiresIn *1000))

        const user = new User(
          response.email,
          response.localId,
          response.idToken,
          expirationDate
        );

        this.user.next(user);
      })
    )
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
  
}


