// @//models/interfaces.ts

import { RetailPrices, DrinkVolume } from '@/src/models/types';
import { Country, DrinkCategory } from '@/src/models/enums';


export interface IDrink {
  id:number;
  title:string;
  category:DrinkCategory;
  volume:DrinkVolume;
  prices:RetailPrices;
  inWish:boolean;
  ratings:number;
  country:Country;
  description:string;
}




