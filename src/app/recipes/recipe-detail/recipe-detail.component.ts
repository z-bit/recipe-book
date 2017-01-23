import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'app/common/models/recipe';
import { ShoppingListService } from 'app/common/services/shopping-list.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  constructor(
      private sls: ShoppingListService
  ) { }

  ngOnInit() {
  }

  addToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

}
