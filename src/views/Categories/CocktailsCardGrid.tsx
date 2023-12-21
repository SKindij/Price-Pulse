// @/views/Categories/CocktailsCardGrid.tsx
import Grid from '@mui/material/Grid';

import CoctailReviewCard from '@/views/Categories/CoctailReviewCard';

import { cocktailsData } from '@/seeder/placeholder-data';

export default function CocktailsCardGrid() {
  return (  
    <Grid container spacing={{ xs:3, sm:2, md:3 }} >
	  {/* spacing:{spacing between elements in container} */}
      { cocktailsData.map((cocktail) => (      
		<Grid item xs={12} sm={6} md={4} lg={3} key={cocktail.cocktailID}>
          {/* item:{column width for different screens} */} 
		  <CoctailReviewCard cocktail={cocktail} />
        </Grid>
      )) }
    </Grid>
  );
}
