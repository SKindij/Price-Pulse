// @path: @/backend/models/types.ts

import { RetailChain } from "@/backend/models/enums.ts";



// use enum as keys for this object
export type RetailPrices = {
  [K in RetailChain]: number | 'none';
};

export type DrinkVolume = 0.5 | 0.7 | 1.0;







