import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { AuthGuard } from './guards/auth.guards';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },

  {
    path: 'categories/create',
    component: CategoryCreateComponent,
    canActivate: [AuthGuard],
  },
  { path: 'auth', component: AuthComponent },
];

//movies

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
