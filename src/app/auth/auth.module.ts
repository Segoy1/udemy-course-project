import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../header/shared/shared.module";

@NgModule({
  declarations:[
    AuthComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forRoot( [{path: '', component: AuthComponent}]),
  ],
  exports: [RouterModule]
})
export class AuthModule{}
