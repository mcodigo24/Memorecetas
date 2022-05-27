import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recip: Recipe;

  constructor(private route: ActivatedRoute, public foodService: FoodService) {
    this.recip = new Recipe();
  }

  ngOnInit(): void {
    this.loadRecipe();
  }

  loadRecipe() {
    this.route.params.subscribe((parametros) => {
      this.foodService.getDataRecipeInx(parametros['id']).subscribe(
        (recipe: any) => {
          this.recip.title = recipe.title;
          this.recip.categories = recipe.categories;
          this.recip.ingredients = recipe.ingredients;
        },
        (error) => {
          console.error(error);
        }
      );

      this.foodService.getRecipe(parametros['id']).subscribe(
        (recipe: any) => {
          this.recip.description = recipe.desc;
          this.recip.sbs = recipe.sbs;
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }
}
