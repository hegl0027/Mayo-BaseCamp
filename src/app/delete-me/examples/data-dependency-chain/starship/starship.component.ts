import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Film, Person, StarShip } from '../state/starwars.interfaces';
import { StarWarsService } from '../../../shared/starwars.service';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import * as R from 'ramda';

const getPilots = (s: StarWarsService) => (p: string[]) => p.map(url => s.getPerson(url));

const getFilms = (s: StarWarsService) => (p: string[]) => p.map(url => s.getFilms(url));

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarshipComponent implements OnInit {

  @Input('starship') starship: StarShip;

  pilots$: Observable<Person[]> = Observable.of([]);
  films$: Observable<Film[]> = Observable.of([]);

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit() {

    const pilots = R.defaultTo([])(this.starship.pilots);
    const films = R.defaultTo([])(this.starship.films);

    if (pilots.length) {
      this.pilots$ = R.compose(forkJoin, getPilots(this.starWarsService))(pilots);
    }

    if (films) {
      this.films$ = R.compose(forkJoin, getFilms(this.starWarsService))(films);
    }
  }
}
