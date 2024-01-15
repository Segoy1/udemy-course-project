import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingListEditComponent} from "./shopping-list-edit/shopping-list-edit.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

const routes:  Routes =   [
  {path: 'shopping-list', component: ShoppingListComponent}
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
    exports: [RouterModule]
  }
)
export class ShoppingListModule{}
