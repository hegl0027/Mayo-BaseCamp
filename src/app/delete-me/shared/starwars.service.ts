import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Film, Person, StarShip } from '../examples/data-dependency-chain/state/starwars.interfaces';

@Injectable()
export class StarWarsService {

  constructor(private http$: HttpClient) { }

  getStarships(): Observable<StarShip[]> {
    return this.http$.get<any>(environment.starWarsUrl)
      .map(res => res.results);
  }

  getPerson(url: string): Observable<Person> {
    return this.http$.get<Person>(url);
  }

  getFilms(url: string): Observable<Film> {
    return this.http$.get<Film>(url);
  }
}
