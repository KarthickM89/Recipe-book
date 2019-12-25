import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Idli', 'A good and healthy dish', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj86mz1DvHLfh8frEyugQh-3WyMBnBqgSBAVMCl-_zde1LErll&s'),
    new Recipe('Egg Kuska', 'A super delicious biriyani', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Ma3ACcmlVBCVYaRM-6EFTADKdWvAH03-efXnh_Poc8by9FurBA&s')
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
