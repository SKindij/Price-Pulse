// @/models/interfaces.ts

import { RetailPrices, DrinkVolume } from '@/models/types';
import { Country, DrinkCategory, CocktailIngredients, GlassType } from '@/models/enums';


export interface IBeverage {
  beverageId:number;
  title:string;
  category:DrinkCategory;
  volume:DrinkVolume;
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
  ingredients?:CocktailIngredients[];
  glassType?:GlassType;
  instructions?:string[];
}






