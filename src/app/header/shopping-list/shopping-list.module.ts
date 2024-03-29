import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingListEditComponent} from "./shopping-list-edit/shopping-list-edit.component";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {LoggingService} from "../../logging.service";

const routes:  Routes =   [
  {path: '', component: ShoppingListComponent}
  ]

@NgModule(
  {
    declarations: [
      ShoppingListComponent,
      ShoppingListEditComponent
    ],
    imports: [
      SharedModule,
      FormsModule,
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: [LoggingService]
  }
)
export class ShoppingListModule{}
