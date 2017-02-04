import { Injectable } from '@angular/core';
import { Recipe } from 'app/common/models/recipe';
import { Ingredient } from 'app/common/models/ingredient';



@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
        'Wiener Schnitzel',
        'Very tasty',
        'http://honest-food.net/wp-content/uploads/2012/12/wiener-schnitzel-recipe-600px.jpg',
        [
            new Ingredient('French Fries', 2),
            new Ingredient('Pork Meat', 1)
        ]
    ),
    new Recipe(
        'Sommer Salad',
        'Okeyish',
        'http://cdn.agilitycms.com/naturally-savvy/Images/Articles/summersalad.jpg',
        []
    ),
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id) {
      return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
      this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
  }

  updateRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
      this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }
}
