import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth.guards";
import { SharedModule } from "../shared/shared.module";
import { CategoryCreateComponent } from "./category-create/category-create.component";
import { CategoryRoutingModule } from "./category-routing.module";
import { CategoryComponent } from "./category.component";


@NgModule({
    declarations: [
        CategoryComponent,   
        CategoryCreateComponent,

    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        CategoryRoutingModule,
        SharedModule

    ],
    exports: [
        
        CategoryComponent,   
        CategoryCreateComponent,
    ]
})
export class CategoriesModule {

}