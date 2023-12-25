// @/views/Categories/Beverages/BeveragesCardGrid.tsx
import Grid from '@mui/material/Grid';

import BeverageCard from '@/views/Categories/Beverages/BeverageCard';

import { beveragesData } from '@/seeder/placeholder-data';

export default function BeveragesCardGrid() {
  return (
    <Grid container spacing={{ xs:3, sm:2, md:3 }} >
	  {/* spacing:{spacing between elements in container} */}
      { beveragesData.map((beverage) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={beverage.beverageId}>
          {/* item:{column width for different screens} */}
		  <BeverageCard beverage={beverage} />
        </Grid>
      )) }
    </Grid>
  );
}