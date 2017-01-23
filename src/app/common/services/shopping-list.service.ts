import { Injectable } from '@angular/core';
import { Ingredient } from 'app/common/models/ingredient';

@Injectable()
export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }
  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }
}
