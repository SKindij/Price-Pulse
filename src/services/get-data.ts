// @/services/get-data.ts
import {
  RetailChain, CocktailIngredients, GlassType
} from '@/models/enums';
import { IBeverage, ICocktail } from '@/models/interfaces';
import { CountryData, CategoriesData } from '@/models/types';
// we get some static information
import { beveragesData, cocktailsData } from '@/seeder/placeholder-data';

import { unstable_noStore as noStore } from 'next/cache';
// function allows you to make queries to the database
import { sql } from '@vercel/postgres';

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
export async function fetchAllCountries():Promise<string[]> {
  // const countriesData = Object.values(Country) as string[];
  // this prevent response from being cached
  noStore(); // equivalent to fetch(..., {cache: 'no-store'})
  try {
    console.log('Fetching countries data...');
    const data = await sql<CountryData>`SELECT Country_name FROM countries`;
    console.log('Data fetch completed.');
    // Extract the country names from the rows
    const countryNames = data.rows.map( (row) => row.country_name );
    console.log(`Number of countries: ${countryNames.length}`); // => 29
    return countryNames;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch country data.');
  }
}
// Function to get all drink categories
export async function fetchDrinkCategories():Promise<string[]> {
  // const categoriesData = Object.values(DrinkCategory) as string[];
  // this prevent response from being cached
  noStore(); // equivalent to fetch(..., {cache: 'no-store'})
  try {
    console.log('Fetching categories data...');
    const data = await sql<CategoriesData>`SELECT drink_category FROM drink_categories`;
    console.log('Data fetch completed.');
    // Extract the country names from the rows
    const drinkCategories = data.rows.map( (row) => row.drink_category );
    console.log(`Number of categories: ${drinkCategories.length}`); // => 9
    return drinkCategories;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories data.');
  }
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