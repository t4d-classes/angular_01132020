import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    console.log('intercepted...');

    const newRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer SOME_TOKEN`,
      },
    });

    return next.handle(newRequest).pipe(map(
      (event: HttpEvent<any>) => {

        if (event instanceof HttpResponse) {
          console.log('HttpResponse: ', event);
        }

        if (event instanceof HttpErrorResponse) {
           console.log('HttpErrorResponse: ', event);
        }

        return event;

      },
    ));
  }

}
