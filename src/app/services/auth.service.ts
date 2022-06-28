import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthResponse } from '../models/AuthResponse';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_key ="AIzaSyBqjn1TUeOvNQ5ugGNrV_IX64QEMfWepps"

  constructor(private http: HttpClient) { }


  signUp(email: string, password: string) {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(this.handleError)
    )
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
  private handleError(response: HttpErrorResponse) {
    let message = "Error occured";

    if(!navigator.onLine) {
      message = "Internet connection error!"
      return  throwError(() => message);
    }

    if(response.error.error) {
      switch(response.error.error.message) {
        case "EMAIL_EXISTS":
          message = "This mail used before!";
          break;
        case "EMAIL_NOT_FOUND":
          message = "Email address not found!";
          break;
        case "INVALID_PASSWORD":
          message = "Invalid password!";
          break;
      }
    }

    return throwError(() => message);

  }
}


