import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css'],
})
export class FoodCardComponent implements OnInit {
  @Input() cardRecipe: Recipe = {};

  constructor() {}

  ngOnInit(): void {}
}
