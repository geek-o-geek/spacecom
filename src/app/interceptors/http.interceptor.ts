import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { tap, finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading/loading.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    activeRequests: number = 0;

    constructor(private loadingScreenService: LoadingService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (this.activeRequests === 0) {
          console.log("started...")
          this.loadingScreenService.start();
        } 
        const headers = req.clone({
            headers: new HttpHeaders ({
                'Content-Type':  'application/json'
            })
        });
        
        this.activeRequests++;
        return next.handle(headers).pipe(
            tap(
                event => { },
                err => {
                    console.log("Error occured: ", err)
                }
            ),
            finalize(() => {
                this.activeRequests--;
                if (this.activeRequests === 0) { 
                  console.log("stopped...")
                  this.loadingScreenService.stop();
                }
              })
        );
    }
}