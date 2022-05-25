import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodMainComponent } from './components/food-main/food-main.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
  { path: '', component: FoodMainComponent },

  // Ruta con un parametro
  //{ path: 'contacto/:page', component: ContactoComponent },

  { path: '**', component: ErrorComponent },
];

export const AppRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
