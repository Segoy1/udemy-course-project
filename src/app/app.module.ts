import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownDirective} from "./header/shared/dropdown.directive";
import {AppRoutingModule} from "./app-routing.module";
import {ShoppingListService} from "./header/shopping-list/shopping-list.service";
import {RecipeService} from "./header/recipes/recipe.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthComponent} from "./auth/auth.component";
import {LoadingSpinnerComponent} from "./header/shared/loading-spinner/loading-spinner.component";
import {AuthInterceptorService} from "./auth/auth-interceptor.service";
import {AlertComponent} from "./header/shared/alert/alert.component";
import {PlaceholderDirective} from "./header/shared/placeholder.directive";
import {RecipesModule} from "./header/recipes/recipes.module";
import {ShoppingListModule} from "./header/shopping-list/shopping-list.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule
  ],
  providers: [ShoppingListService, RecipeService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
