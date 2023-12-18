// @/app/recipes/page.tsx
import RecipeReviewCard from '@/views/Categories/RecipeReviewCard';


export default function RecipesPage() {
  return (
    <>
      <h1>Recipes Page</h1>
      {/*  */}
      <p>Various recipes of delicious dishes will be collected here.</p>
      {/*  */}
      <RecipeReviewCard />
    </>
  );
}