import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ShipsService {
  constructor(private httpClient: HttpClient) { }

  public getStarShips(): Observable<any> {
    return this.httpClient.get('https://swapi.dev/api/starships/?page=1');
  }
}