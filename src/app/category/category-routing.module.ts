import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guards";
import { CategoryCreateComponent } from "./category-create/category-create.component";
import { CategoryComponent } from "./category.component";

const routes: Routes = [
    {
        path: '',
        component: CategoryCreateComponent,
        canActivate: [AuthGuard],
        children: [
          { path: 'create', component: CategoryCreateComponent},
        ]
    },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class CategoryRoutingModule {

}