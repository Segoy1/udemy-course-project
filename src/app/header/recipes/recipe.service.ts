import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

  private recipes: Recipe[] = [
    new Recipe('Steak',
      'Mmmmmhm Steak',
      'https://www.grillfuerst.de/magazin/wp-content/uploads/2021/12/Entrecote-grillen.jpg.webp?v=1665041148',
      [
        new Ingredient('Meat', 500),
        new Ingredient('Fries', 20),
      ]),
    new Recipe('Hamburger',
      'Yummy Burger',
      'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 250)
      ])
  ];

  constructor(private shoppingListService:ShoppingListService) {
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
