import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { shareReplay, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LaunchSpaceService {
  baseUrl: string = environment.baseUrl;
  private readonly LAUNCH_URL = `${this.baseUrl}/launches`;
  constructor(private http: HttpClient) { }

  cache = {}; 

  launches(filterObj): Observable<any> {
    let queryParams = ``;
    let idx = 0;

    for (const key in filterObj) {
      if (filterObj.hasOwnProperty(key)) {
        const element = filterObj[key];
        queryParams += (idx == 0? `?${key}=${element}`: `&${key}=${element}`); 
        idx++
      }
    }

    if (this.cache[queryParams]) {
      return this.cache[queryParams]
    }
    
    this.cache[queryParams] = this.http.get(this.LAUNCH_URL+queryParams).pipe(
      shareReplay(1),
      catchError(err => {
          delete this.cache[queryParams];
          return EMPTY;
    }));  

    return this.cache[queryParams]
  }
}
