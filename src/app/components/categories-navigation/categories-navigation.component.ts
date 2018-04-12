import { Component, OnInit } from '@angular/core';
import { JokesCategoriesList } from '../../models/jokes-categories-list';
import { ChuckNorrisJoke } from '../../models/chuck-norris-joke';
import { ChuckNorrisJokesService } from '../../services/chuck-norris-jokes.service';

@Component({
  selector: 'app-categories-navigation',
  templateUrl: './categories-navigation.component.html',
  styleUrls: ['./categories-navigation.component.css']
  // directives:[JokesComponent]
})
export class CatgoriesNavigationComponent implements OnInit {

  public categories: JokesCategoriesList;
  public jokes: ChuckNorrisJoke[];
  private selectedCategory = null;

  constructor(private chuckNorrisJokesService: ChuckNorrisJokesService) {
  }

   ngOnInit() {
     this.chuckNorrisJokesService.getJokesCategories().subscribe(c => this.categories = c);
   }

   public displayJokes(category: string = null) {
    this.chuckNorrisJokesService.publishUpdatedJokesToDisplay(category);
   }

   public onNumberOfDisplayChanged() {
     this.displayJokes(this.selectedCategory);
   }
}
