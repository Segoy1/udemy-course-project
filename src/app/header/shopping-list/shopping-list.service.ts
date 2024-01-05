import {Ingredient} from "../shared/ingredient.model";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({providedIn:"root"})
export class ShoppingListService{

  ingredientsChanged= new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

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
  getIngredient(index:number) {
    return this.ingredients[index];
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients = this.ingredients.slice(0,index).concat(this.ingredients.slice(index+1));
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
