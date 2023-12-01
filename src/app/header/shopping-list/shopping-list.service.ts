import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable({providedIn:"root"})
export class ShoppingListService{

  ingredientsChanged= new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Banana', 5),
    new Ingredient('sugar', 250)
  ];

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  getIngredients(){
    return this.ingredients.slice();
  }
}
