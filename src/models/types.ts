// @/models/types.ts
import { Country, DrinkCategory } from '@/models/enums';
// types created on the basis of lists of data
export type CountryType = keyof typeof Country;
export type DrinkCategoryType = keyof typeof DrinkCategory;
export type BottleСapacity = 0.5 | 0.7 | 1.0;
// types for tables in the database
export type CountryData = {
  countryID:number;
  countryName:CountryType;
  prefixEAN:string;
};
export type DrinkCategoryData = {
  categoryID:number;
  categoryName:DrinkCategoryType;
};

// we will use it in cocktails and recipes
export type IngredientsAndQuantities<E extends string> = {
  [K in E]?:string;
};
