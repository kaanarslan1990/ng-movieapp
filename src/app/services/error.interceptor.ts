import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";


export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((response: HttpErrorResponse) => {
                let message = "Error occured";

    if(!navigator.onLine) {
      message = "Internet connection error!"
      return  throwError(() => message);
    }

    if(response.error.error){
        if(response.status === 401) {
            message="Unauthorized user";
            console.log(message)
            return  throwError(() => message);
        }
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
            } )
        )
    }

}