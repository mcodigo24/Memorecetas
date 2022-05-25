import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DividerComponent } from './components/divider/divider.component';
import { FoodMainComponent } from './components/food-main/food-main.component';
import { FoodCardComponent } from './components/food-card/food-card.component';

import { FoodService } from './services/food.service';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ErrorComponent } from './components/error/error.component';
import { AppRoutingProviders, Routing } from './app.routing';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DividerComponent,
    FoodMainComponent,
    FoodCardComponent,
    RecipeComponent,
    ErrorComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, HttpClientModule, Routing],
  providers: [FoodService, AppRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
