import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeEvent:EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe',
      'This is the Test Recipe',
      'https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg?crop=0.9995238095238095xw:1xh;center,top&resize=980:*'),
    new Recipe('second Test Recipe', 'Still a Test', 'https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg?crop=0.9995238095238095xw:1xh;center,top&resize=980:*')
  ];

  constructor() {
  }

  onClick(recipe: Recipe){
    this.recipeEvent.emit(recipe);
  }

}
