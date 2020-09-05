import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const headers = req.clone({
            headers: new HttpHeaders ({
                'Content-Type':  'application/json'
            })
        });
      
        return next.handle(headers).pipe(
            tap(
                event => { },
                err => {
                    console.log("Error occured: ", err)
                }
            )
        );
    }
}