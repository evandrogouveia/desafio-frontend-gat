import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Dados } from '../model/dados.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  get(): Observable<Dados> {
    return this.http.get<Dados>(`${this.url}/sheet1`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}