import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations:[
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot( [{path: 'auth', component: AuthComponent}]),
  ],
  exports: [RouterModule]
})
export class AuthModule{}
