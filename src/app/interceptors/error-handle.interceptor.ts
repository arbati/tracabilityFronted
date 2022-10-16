import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class ErrorHandleInterceptor implements HttpInterceptor {

  constructor(private snack:MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((error)=>{
     if(error instanceof HttpErrorResponse){
      //if(error.error instanceof ErrorEvent){

      
       this.snack.open(error.message,"Error");
      

      //}

     }else{

     }

   return throwError(()=> new Error(error.statusText));
    }));
  }
}
