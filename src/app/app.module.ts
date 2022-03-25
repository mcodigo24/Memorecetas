import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DividerComponent } from './divider/divider.component';
import { FoodMainComponent } from './food-main/food-main.component';
import { FoodCardComponent } from './food-card/food-card.component';

import { FoodService } from './services/food.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DividerComponent,
    FoodMainComponent,
    FoodCardComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [FoodService],
  bootstrap: [AppComponent],
})
export class AppModule {}
