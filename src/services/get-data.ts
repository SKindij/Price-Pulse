// @/services/get-data.ts
import { IBeverage, ICocktail } from '@/models/interfaces';
import {
  DrinkCategory, RetailChain, Country, CocktailIngredients, GlassType
} from '@/models/enums';
import { beveragesData, cocktailsData } from '@/seeder/placeholder-data';

/* ----- BEVERAGES ----- */
// Function to get all drinks
export function fetchAllBeverages():IBeverage[] {
  return beveragesData;
}

// Function to get a drink by its id
export function fetchBeverageById(id:number):IBeverage | undefined {
  return beveragesData.find( (beverage) => beverage.beverageId === id );
}

// Function to get a drink by its name
export function fetchBeverageByName(name:string):IBeverage | undefined {
  return beveragesData.find( (beverage) => beverage.title === name );
}

/* ----- ENUMS ----- */
// Function to get all countries
export function fetchAllCountries():string[] {
  const countriesData = Object.values(Country) as string[];
  return countriesData;
}
// Function to get all drink categories
export function fetchDrinkCategories():string[] {
  const categoriesData = Object.values(DrinkCategory) as string[];
  return categoriesData;
}


/* ----- COCTAILS ----- */
// Function to get all cocktails
export function fetchAllCocktails():ICocktail[] {
  return cocktailsData;
}

// Function to get a cocktail by its id
export function fetchCocktailById(id:number):ICocktail | undefined {
  return cocktailsData.find( (cocktail) => cocktail.cocktailID === id );
}

// Function to get a cocktail by its name
export function fetchCocktailByName(name:string):ICocktail | undefined {
  return cocktailsData.find( (cocktail) => cocktail.title === name );
}