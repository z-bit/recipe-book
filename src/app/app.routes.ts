import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
 // {path: 'recipes', component: RecipesComponent, children: RECIPES_ROUTES},     => lazy loading, like this:
    {path: 'recipes' , loadChildren: 'app/recipes/recipes.module#RecipesModule'}, // ============
    {path: 'shopping-list', component: ShoppingListComponent},

];

export const AppRoutes = RouterModule.forRoot(routes);