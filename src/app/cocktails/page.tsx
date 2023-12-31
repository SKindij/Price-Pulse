// @path: @/app/cocktails/page.tsx
import Container from '@mui/material/Container';
import CocktailsCardGrid from '@/views/Categories/Coctails/CocktailsCardGrid';
import Box from '@mui/material/Box';

export default function CocktailsPage() {
  return (
    <Box component="div">
      <h1>Cocktails Page</h1>
      <p>Here we will collect a selection of various delicious cocktails.</p>
      <Box component="div">
        {/*  */}
        < CocktailsCardGrid />
      </Box>
    </Box>
  );
}