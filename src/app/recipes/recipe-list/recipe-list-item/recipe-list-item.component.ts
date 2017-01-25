import { Component, Input } from '@angular/core';
import { Recipe } from 'app/common/models/recipe';


@Component({
  selector: 'rb-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent {
  @Input() recipe: Recipe;
  @Input() recipeId: number;

}
