import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'rb-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeId: number;
  constructor() { }

  ngOnInit() {
  }

}
