import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe',
      'This is the Test Recipe',
      'https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg?crop=0.9995238095238095xw:1xh;center,top&resize=980:*'),
    new Recipe('second Test Recipe', 'Still a Test', 'https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg?crop=0.9995238095238095xw:1xh;center,top&resize=980:*')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
