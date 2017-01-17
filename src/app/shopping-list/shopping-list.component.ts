import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'app/data/models/ingredient';


@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];
  constructor() { }

  ngOnInit() {
  }

}
