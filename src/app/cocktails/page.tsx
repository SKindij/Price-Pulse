// @path: @/app/cocktails/page.tsx
import Container from '@mui/material/Container';
import CocktailsImageList from '@/views/Categories/CocktailsImageList';



export default function CocktailsPage() {
  return (
    <>
      <h1>Cocktails Page</h1>
      {/*  */}
      <p>Here we will collect a selection of various delicious cocktails.</p>
      {/*  */}
      <Container>
        < CocktailsImageList />
      </Container>
    </>
  );
}