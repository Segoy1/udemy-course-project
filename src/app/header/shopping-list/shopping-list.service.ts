import {Ingredient} from "../shared/ingredient.model";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({providedIn:"root"})
export class ShoppingListService{

  ingredientsChanged= new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Banana', 5),
    new Ingredient('sugar', 250)
  ];

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]){
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.next(this.ingredients.slice());
  }
}
