import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'app/data/models/recipe';


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Wiener Schnitzel', 'Very tasty','http://honest-food.net/wp-content/uploads/2012/12/wiener-schnitzel-recipe-600px.jpg', []),
      new Recipe('Sommer Salad', 'Okeyish', 'http://cdn.agilitycms.com/naturally-savvy/Images/Articles/summersalad.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy', 'https://pbs.twimg.com/profile_images/747456419683774464/wnl4EjM-_400x400.jpg', [])

  constructor() {}
  ngOnInit() {}

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
