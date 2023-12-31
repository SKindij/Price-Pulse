// @/views/Categories/Beverages/BeveragesCardGrid.tsx
import Grid from '@mui/material/Grid';

import BeverageCard from '@/views/Categories/Beverages/BeverageCard';
// get information from the database
import { fetchAllBeverages } from '@/services/get-data';

export default async function BeveragesCardGrid() {
  // to get the data of all drinks
  const beverages = await fetchAllBeverages();

  if (!beverages || beverages.length === 0) {
    console.log('No beverages data received.');
    return <p>No beverages available.</p>;
  }

  return (
    <Grid container spacing={{ xs:3, sm:2, md:2 }} >
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