import { NgModule } from '@angular/core';

import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'categories', loadChildren: () => import('./category/categories.module').then(m =>m.CategoriesModule)},
  { path: 'movies', loadChildren: () => import('./movies/movies.module').then(m =>m.MoviesModule)},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
];

//movies

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
