import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Recipe } from 'app/common/models/recipe';
import { ShoppingListService } from 'app/common/services/shopping-list.service';
import { RecipeService } from 'app/common/services/recipe.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  private subscription: Subscription;
  private recipeIndex: number;

  constructor(
      private shoppingListService: ShoppingListService,
      private activatedRoute: ActivatedRoute,
      private recipeService: RecipeService,
      private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
        (params: any) => {
            this.recipeIndex = params['id'];
            this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
        }
    );
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  addToShoppingList(){
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
