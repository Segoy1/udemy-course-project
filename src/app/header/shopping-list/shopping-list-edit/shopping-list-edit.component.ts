import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {
  @Output() ingredientEvent: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  @ViewChild("nameInput") ingredientName: ElementRef;
  @ViewChild("amountInput") amount: ElementRef;

  addIngredient() {
    this.ingredientEvent.emit(new Ingredient(this.ingredientName.nativeElement.value, this.amount.nativeElement.value))
  }
}
