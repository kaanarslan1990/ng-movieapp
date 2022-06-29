import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { AuthGuard } from './guards/auth.guards';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies/category/:categoryId', component: MoviesComponent, canActivate: [AuthGuard] },
  { path: 'movies/create', component: MovieCreateComponent, canActivate: [AuthGuard]},
  { path: 'categories/create', component: CategoryCreateComponent, canActivate: [AuthGuard]},
  { path: 'movies/:movieId', component: MovieDetailsComponent, canActivate: [AuthGuard]},
  { path: 'auth', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}
