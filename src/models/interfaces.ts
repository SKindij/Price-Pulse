// @/models/interfaces.ts

import { RetailPrices, BottleСapacity, IngredientsAndQuantities } from '@/models/types';
import { Country, DrinkCategory, CocktailIngredients, GlassType, RecipeIngredients } from '@/models/enums';


export interface IBeverage {
  beverageId:number;
  title:string;
  category:DrinkCategory;
  volume:BottleСapacity;
  prices:RetailPrices;
  inWish:boolean;
  ratings:number;
  country:Country;
  description:string;
  imageUrl?:string;
}

export interface ICocktail {
  cocktailID:number;
  title:string;
  imageUrl?:string;
  alcoholic:boolean;
  ingredients?:IngredientsAndQuantities<CocktailIngredients>;
  glassType?:GlassType;
  instructions?:string[];
}

export interface IRecipe {
  recipeID:number;
  title:string;
  imageUrl?:string;
  ingredients?:IngredientsAndQuantities<RecipeIngredients>;
  instructions?:string[];
}




