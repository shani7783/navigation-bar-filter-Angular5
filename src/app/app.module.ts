import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CatgoriesNavigationComponent } from './components/categories-navigation/categories-navigation.component';
import { ChuckNorrisJokesComponent } from './components/chuck-norris-jokes/chuck-norris-jokes.component';
import { MainAppRoutes } from './app.routing';
import { ChuckNorrisJokesService } from './services/chuck-norris-jokes.service';




@NgModule({
  declarations: [
    AppComponent,
    CatgoriesNavigationComponent,
    ChuckNorrisJokesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainAppRoutes,
    BrowserModule,
  ],
  providers: [ChuckNorrisJokesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
