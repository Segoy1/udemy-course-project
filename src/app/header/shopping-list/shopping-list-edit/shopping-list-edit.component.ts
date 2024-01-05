import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {
  @ViewChild("form") ingredientForm: NgForm;


  constructor(private shoppingListService:ShoppingListService) {
  }

  onSubmit(){
    console.log(this.ingredientForm);
    this.shoppingListService.addIngredient(new Ingredient(this.ingredientForm.value.name, this.ingredientForm.value.amount));
  }

  protected readonly onsubmit = onsubmit;
}
