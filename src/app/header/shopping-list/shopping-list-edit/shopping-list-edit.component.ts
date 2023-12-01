import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {
  @ViewChild("nameInput") ingredientName: ElementRef;
  @ViewChild("amountInput") amount: ElementRef;

  constructor(private shoppingListService:ShoppingListService) {
  }

  addIngredient() {
    this.shoppingListService.addIngredient(new Ingredient(this.ingredientName.nativeElement.value, this.amount.nativeElement.value))
  }
}
