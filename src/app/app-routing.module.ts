import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./header/recipes/recipes.component";
import {ShoppingListComponent} from "./header/shopping-list/shopping-list.component";
import {RecipeStartComponent} from "./header/recipes/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "./header/recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./header/recipes/recipe-edit/recipe-edit.component";
import {RecipesResolverService} from "./header/recipes/recipes-resolver.service";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
      {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
