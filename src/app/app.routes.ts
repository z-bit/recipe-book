import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { RECIPES_ROUTES } from './recipes/recipes.routes';



const routes: Routes = [
    {path: '', redirectTo: 'recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: RECIPES_ROUTES},
    {path: 'shopping-list', component: ShoppingListComponent},

];

export const AppRoutes = RouterModule.forRoot(routes);