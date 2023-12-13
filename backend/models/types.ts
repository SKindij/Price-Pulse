// @path: @/backend/models/types.ts

import { RetailChain } from '@/backend/models/enums';



// use enum as keys for this object
export type RetailPrices = {
  [K in RetailChain]:{
    price:number | 'none';
    lastUpdated:Date;
  };
};

export type DrinkVolume = 0.5 | 0.7 | 1.0;







