import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './header/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './header/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './header/recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './header/recipes/recipes.component';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {DropdownDirective} from "./header/shared/dropdown.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    DropdownDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
