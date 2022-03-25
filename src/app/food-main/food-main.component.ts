import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food-main',
  templateUrl: './food-main.component.html',
  styleUrls: ['./food-main.component.css'],
})
export class FoodMainComponent implements OnInit {
  lstRecipes: Recipe[] = [];
  sSweetTitle: string = '';
  sSaltyTitle: string = '';

  constructor(public foodService: FoodService) {
    this.sSweetTitle = 'Dulces';
    this.sSaltyTitle = 'Saldados';
    this.lstRecipes = [];
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.foodService.getRecipes().subscribe(
      (data: any) => {
        this.lstRecipes = data.recipes.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          ingredients: item.ingredients,
          sbs: item.sbs,
        }));
      },
      (error) => {}
    );
  }
}
