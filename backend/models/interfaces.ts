// @path: @/backend/models/interfaces.ts

import { RetailPrices, DrinkVolume } from "@/backend/models/types.ts";
import { Country, DrinkCategory } from "@/backend/models/enums.ts";


export interface IDrink {
  title: string;
  category: DrinkCategory;
  volume: DrinkVolume;
  prices: RetailPrices;
  inWish: boolean;
  ratings: number;
  country: Country;
  id: number;
}




