// @/views/Categories/Coctails/CocktailsCardGrid.tsx
import Grid from '@mui/material/Grid';

import CoctailReviewCard from '@/views/Categories/Coctails/CoctailReviewCard';
// get information from the database
import { fetchAllCocktails } from '@/services/get-data';

export default async function CocktailsCardGrid() {
  // to get the data of all drinks
  const cocktails = await fetchAllCocktails();

  if (!cocktails || cocktails.length === 0) {
    console.log('No cocktails data received.');
    return <p>No cocktails available.</p>;
  }

  return (
    <Grid container spacing={{ xs:3, sm:2, md:3 }} >
	  {/* spacing:{spacing between elements in container} */}
      { cocktails.map((cocktail) => (
		    <Grid item xs={12} sm={6} md={4} lg={3} key={cocktail.cocktailID}>
          {/* item:{column width for different screens} */}
		      <CoctailReviewCard cocktail={cocktail} />
        </Grid>
      )) }
    </Grid>
  );
}