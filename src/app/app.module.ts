import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { HttpClientModule} from "@angular/common/http";
import {AuthComponent} from "./auth/auth.component";
import {RecipesModule} from "./header/recipes/recipes.module";
import {ShoppingListModule} from "./header/shopping-list/shopping-list.module";
import {SharedModule} from "./header/shared/shared.module";
import {CoreModule} from "./core.module";
import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    CoreModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
