import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'app/common/models/ingredient';
import { ShoppingListService } from 'app/common/services/shopping-list.service';



@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];
  selectedItem: Ingredient = null;

  constructor(
      private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this.items = this.shoppingListService.getItems();
  }

  onSelectItem(item: Ingredient) {
    this.selectedItem = item;
  }

  onCleared() {
    this.selectedItem = null;
  }

}
