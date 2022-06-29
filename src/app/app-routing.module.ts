import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { AuthGuard } from './guards/auth.guards';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesHomeComponent } from './movies/movies-home/movies-home.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  {
    path: 'movies',
    component: MoviesHomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: MoviesComponent },
      { path: 'category/:categoryId', component: MoviesComponent },
      { path: 'create', component: MovieCreateComponent},
      { path: ':movieId', component: MovieDetailsComponent},

    ]},
  


  { path: 'categories/create', component: CategoryCreateComponent, canActivate: [AuthGuard]},
  { path: 'auth', component: AuthComponent},
];

//movies 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}
