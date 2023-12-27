// @/views/Categories/Beverages/BeveragesCardGrid.tsx
import Grid from '@mui/material/Grid';

import BeverageCard from '@/views/Categories/Beverages/BeverageCard';
// get information from the database
import { fetchAllBeverages } from '@/services/get-data';

export default async function BeveragesCardGrid() {
  // to get the data of all drinks
  const beverages = await fetchAllBeverages();

  if (!beverages) {
    console.log('No beverages data received.');
  }

  return (
    <Grid container spacing={{ xs:3, sm:2, md:3 }} >
	  {/* spacing:{spacing between elements in container} */}
      { beverages.map((beverage) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={beverage.beverageId}>
          {/* item:{column width for different screens} */}
		  <BeverageCard beverage={beverage} />
        </Grid>
      )) }
    </Grid>
  );
}