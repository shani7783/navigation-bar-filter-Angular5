import { Component, OnInit, Input } from '@angular/core';
import { ChuckNorrisJoke } from '../../models/chuck-norris-joke';
import { ChuckNorrisJokesService } from '../../services/chuck-norris-jokes.service';

@Component({
  selector: 'app-chuck-norris-jokes',
  templateUrl: './chuck-norris-jokes.component.html',
  styleUrls: ['./chuck-norris-jokes.component.css']
})
export class ChuckNorrisJokesComponent implements OnInit {

  public chuckNorrisJokes: ChuckNorrisJoke[];
  public MAX_JOKES_TO_DISPLAY: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public selectedNumberOfJokes = 5;
  private selectedCategory = null;

  constructor(private chuckNorrisJokesService: ChuckNorrisJokesService) { }

  ngOnInit() {
    this.chuckNorrisJokesService.chuckNorrisJokesCategorySubject.subscribe(category => this.displayJokes(this.selectedCategory));
    this.displayJokes();
  }

  public onNumberOfDisplayChanged() {
    this.displayJokes(this.selectedCategory);
  }

  public displayJokes(category: string = null) {
    this.selectedCategory = category;
    this.chuckNorrisJokesService.getJokesByCategory(this.selectedNumberOfJokes, category)
                                .subscribe(jokes => this.chuckNorrisJokes = jokes);
  }

}
