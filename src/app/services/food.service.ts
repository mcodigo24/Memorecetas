import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get(
      'https://memorecetas-default-rtdb.firebaseio.com/recipes_idx.json'
    );
  }

  getRecipe(id: string) {
    return this.http.get(
      `https://memorecetas-default-rtdb.firebaseio.com/recipes/${id}.json`
    );
  }

  getDataRecipeInx(id: string) {
    let idx = parseInt(id.split('-')[1]) - 1;
    return this.http.get(
      `https://memorecetas-default-rtdb.firebaseio.com/recipes_idx/${idx}.json`
    );
  }
}
