import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CatgoriesNavigationComponent } from './components/categories-navigation/categories-navigation.component';



const routes: Routes = [
    { path: '', redirectTo: 'app-categories-navigation', pathMatch: 'full' },
    { path: 'app-categories-navigation', component: CatgoriesNavigationComponent },
];

export const MainAppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);


