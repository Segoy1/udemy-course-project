import { Component } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  providers:[ShoppingListService]
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Banana', 5),
    new Ingredient('sugar', 250)
  ];

}
