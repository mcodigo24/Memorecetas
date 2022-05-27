import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodMainComponent } from './components/food-main/food-main.component';
import { ErrorComponent } from './components/error/error.component';
import { RecipeComponent } from './components/recipe/recipe.component';

const appRoutes: Routes = [
  { path: '', component: FoodMainComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: '**', component: ErrorComponent },
];

export const AppRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes,
  { useHash: true }
);
