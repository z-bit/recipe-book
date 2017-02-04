import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { Ingredient } from 'app/common/models/ingredient';
import {ShoppingListService} from "app/common/services/shopping-list.service";


@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  addingMode = true;
  @ Input() item: Ingredient;
  @Output() cleared = new EventEmitter();
  constructor(
      private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {}
  ngOnChanges (changes) {
    // fired whenever @Input() changes
    if (changes.item.currentValue === null) {
      this.addingMode = true;
      this.item = {name: null, amount: null};
    } else {
      this.addingMode = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (this.addingMode) {
      // adding
      this.item = newIngredient;
      this.shoppingListService.addItem(this.item);

    } else {
      // editing
      this.shoppingListService.updateItem(this.item, newIngredient);
      this.onClear();
    }
  }

  onDelete() {
    this.shoppingListService.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.addingMode = true;
    this.cleared.emit(null);
  }

}
