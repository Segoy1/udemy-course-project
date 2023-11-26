import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isShoppingList: boolean;
  isRecipes: boolean;

  activeCategory(category: number){
    this.isRecipes=category===1;
    this.isShoppingList=category===2;
  }
}
