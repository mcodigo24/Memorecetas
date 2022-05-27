import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe.model';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-food-main',
  templateUrl: './food-main.component.html',
  styleUrls: ['./food-main.component.css'],
})
export class FoodMainComponent implements OnInit {
  lstRecipes: Recipe[] = [];
  lstSaltyRecipes: Recipe[] = [];
  lstSweetRecipes: Recipe[] = [];
  sSweetTitle: string = '';
  sSaltyTitle: string = '';
  loading: boolean = true;

  constructor(public foodService: FoodService) {
    this.sSweetTitle = 'Dulces';
    this.sSaltyTitle = 'Salados';
    this.lstRecipes = [];
    this.lstSaltyRecipes = [];
    this.lstSweetRecipes = [];
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.foodService.getRecipes().subscribe(
      (lstRec: any) => {
        this.lstRecipes = lstRec.map((item: any) => ({
          id: item.id,
          title: item.title,
          ingredients: item.ingredients,
          has_sbs: item.has_sbs,
          categories: item.categories,
        }));

        this.lstSaltyRecipes = this.lstRecipes.filter(
          (rec) => rec.categories && rec.categories[0] === 'salty'
        );

        this.lstSweetRecipes = this.lstRecipes.filter(
          (rec) => rec.categories && rec.categories[0] === 'sweet'
        );

        this.loading = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
