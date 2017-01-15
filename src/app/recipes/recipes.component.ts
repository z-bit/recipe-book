import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';


@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

}
