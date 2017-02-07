import {Injectable, EventEmitter} from '@angular/core';
import { Recipe } from 'app/common/models/recipe';
import { Ingredient } from 'app/common/models/ingredient';
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';




@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();
  private dataUrl: string = 'https://zbit-recipes.firebaseio.com/';
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
  constructor(
    private http: Http
  ) { }

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

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put(this.dataUrl + 'recipes.json', body, {headers});
    //               ===
    // put replaces the data whilst post adds a new set of data (with a new uid) in Firebase !!!
  }

  fetchData() {
    this.http
      .get(this.dataUrl + 'recipes.json')
      .map( (response: Response) => response.json() )
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      )
    ;
  }
}
