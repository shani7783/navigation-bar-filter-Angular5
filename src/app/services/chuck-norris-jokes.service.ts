import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { JokesCategoriesList } from '../models/jokes-categories-list';
import { ChuckNorrisJoke } from '../models/chuck-norris-joke';

@Injectable()
export class ChuckNorrisJokesService {
    private url = 'http://api.icndb.com/';

    public chuckNorrisJokesCategorySubject: Subject<string> = new Subject<string>();

    constructor(private http: Http) { }

    public getRandomJokes(numberOfJokes: number = 5): Observable<ChuckNorrisJoke[]> {
        const url = `${this.url}/jokes/random/${numberOfJokes}`;
        return this.http.get(url).map(response => response.json().value.map(j => new ChuckNorrisJoke(j)));
    }

    getJokesCategories(): Observable<JokesCategoriesList> {
        return this.http.get(this.url + 'categories')
            .map(response => new JokesCategoriesList(response.json()));
    }

    getJokesByCategory(numberOfJokes: number = 5, category: string = null): Observable<ChuckNorrisJoke[]> {
        let url = `${this.url}/jokes/random/${numberOfJokes}`;
        if (category) {
            url = `${url}?limitTo=[${category}]`;
            return this.http.get(url).map(response => response.json().value.map(j => new ChuckNorrisJoke(j)));
        }
        return this.http.get(url).map(response => response.json().value.map(j => new ChuckNorrisJoke(j)));
    }

    public publishUpdatedJokesToDisplay(category: string = null) {
        this.chuckNorrisJokesCategorySubject .next(category);
    }
}
