import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './header/dropdown.directive';

import { SchopingListModule } from './shopping-list/schoping-list.module';

import { RecipeService } from 'app/common/services/recipe.service';
import { ShoppingListService } from 'app/common/services/shopping-list.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    SchopingListModule,
    AppRoutes,

  ],
  providers: [
    RecipeService,
    ShoppingListService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
