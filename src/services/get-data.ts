// @/services/get-data.ts
import {
  RetailChain, CocktailIngredients, GlassType
} from '@/models/enums';
import { IBeverage, ICocktail } from '@/models/interfaces';
import { CountryData, CategoriesData, RetailPrices } from '@/models/types';
// we get some static information
import { beveragesData, cocktailsData } from '@/seeder/placeholder-data';

import { unstable_noStore as noStore } from 'next/cache';
// function allows you to make queries to the database
import { sql } from '@vercel/postgres';

/* ----- BEVERAGES ----- */
// Function to get all drinks
export async function fetchAllBeverages():Promise<IBeverage[]> {
  // this prevent response from being cached
  noStore();
  try {
    console.log('Fetching BEVERAGES data...');
    const beveragesData = await sql<IBeverage>`
    -- choose the data we need
      SELECT
        bd.beverage_id, bd.beverage_title, dc.drink_category,
        bd.beverage_volume, bd.beverage_in_wish, bd.beverage_ratings,
        co.country_name, bd.beverage_description, bd.beverage_image_url
      FROM
        beverages_data bd
      -- combine beverages_data table with fields of other tables
      JOIN
        countries co ON bd.country_id = co.country_id
      JOIN
        drink_categories dc ON bd.category_id = dc.drink_id;
  `;
    console.log('Data fetch completed.');
    // data to IBeverage interface
    const beverages:IBeverage[] = [];
    for (const row of beveragesData.rows) {
      const beverageId = row.beverage_id;
      const prices:RetailPrices = {};

      // Отримання цін для кожної мережі магазинів
      const priceResult = await sql<RetailPrices>`
        SELECT * FROM beverage_prices
        JOIN retail_chains ON beverage_prices.retail_chain_id = retail_chains.retail_chain_id
        WHERE beverage_id = $1
      `, [beverageId];

      priceResult.rows.forEach((priceRow:any) => {
        prices[priceRow.retail_chain_name] = {
          price: priceRow.price,
          lastUpdated: priceRow.last_updated,
        };
      });

      const beverage:IBeverage = {
        beverageId: row.beverage_id,
        title: row.beverage_title,
        category: row.drink_category,
        volume: row.beverage_volume,
        prices,
        inWish: row.beverage_in_wish,
        ratings: row.beverage_ratings,
        country: row.country_name,
        imageUrl: row.beverage_image_url,
        description: row.beverage_description,
      };

      beverages.push(beverage);
    }
    // checking the form of received data
    console.log(beverages[0]);
    console.log(beverages[1]);
    console.log(beverages[2]);
    return beverages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch beverages data.');
  }
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