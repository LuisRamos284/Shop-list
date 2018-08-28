import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Cookies', 'A tasty Lunch', 'https://media.istockphoto.com/photos/chocolate-chip-cookie-isolated-picture-id517109442?k=6&m=517109442&s=612x612&w=0&h=NvQ5y8ENWZvpr84vEFWmxUgV2rCgtOGEsjJXa3IYsZ4=',[new Ingredient('Meat',1)]),
    new Recipe('Arepa', 'even better lunch', 'https://enrilemoine.com/wp-content/uploads/2016/08/1.-Tuna-Salad-Arepa-SAVOIR-FAIRE-by-enrilemoine.jpg' , [new Ingredient('Buns',2)])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}


