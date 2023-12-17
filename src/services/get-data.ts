// @/services/get-data.ts
import { IBeverage } from '@/models/interfaces';
import { beveragesData } from '@/seeder/placeholder-data';


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






