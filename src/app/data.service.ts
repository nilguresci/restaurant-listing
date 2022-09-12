import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Body } from './interfaces/body';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(limit: number, skip: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        apiKey: 'bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2',
      }),
    };
    let body: Body = {
      skip,
      limit,
      latitude: 38.41273,
      longitude: 27.13838,
    };
    return this.http
      .post<any>(
        'https://smarty.kerzz.com:4004/api/mock/getFeed',
        body,
        httpOptions
      )
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError('Error');
        })
      );
  }
}
