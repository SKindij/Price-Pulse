// @path: @/backend/models/interfaces.ts

import { RetailPrices, DrinkVolume } from '@/backend/models/types';
import { Country, DrinkCategory } from '@/backend/models/enums';


export interface IDrink {
  title:string;
  category:DrinkCategory;
  volume:DrinkVolume;
  prices:RetailPrices;
  inWish:boolean;
  ratings:number;
  country:Country;
  id:number;
}




