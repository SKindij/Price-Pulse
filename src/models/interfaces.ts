// @/models/interfaces.ts
import { CocktailIngredients, GlassType, RecipeIngredients } from '@/models/enums';
import { CountryType, DrinkCategoryType, BottleСapacity,
  IngredientsAndQuantities
} from '@/models/types';

export interface IBeverage {
  beverageId:number;
  title:string;
  category:DrinkCategoryType;
  volume:BottleСapacity;
  Auchan:number;
  Novus:number;
  Silpo:number;
  ATB:number;
  Rozetka:number;
  inWish:boolean;
  ratings:number;
  country:[CountryType, string];
  description:string;
  imageUrl?:string;
  lastUpdated:Date;
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
