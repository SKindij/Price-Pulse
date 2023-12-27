// @/app/categories/beverages/create/page.tsx
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import DrinkCreateForm from '@/views/Categories/Beverages/DrinkCreateForm';
import BreadCrumbs from '@/views/Categories/CategoriesBreadCrumbs';
// icons for breadcrumbs elements
import HomeIcon from '@mui/icons-material/Home';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import GrainIcon from '@mui/icons-material/Grain';
// get information from the database
import { fetchAllCountries, fetchDrinkCategories } from '@/services/get-data';

export default async function CreateBeveragePage() {
  //
  const countries = await fetchAllCountries();
  const categories = await fetchDrinkCategories();

  return (
    <Container>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Головна', href: '/', icon: <HomeIcon /> },
          { label: 'Напої', href: '/categories/beverages', icon: <LocalBarIcon /> },
          { label: 'Створення напою', icon: <GrainIcon /> }
        ]}
      />
      {/* Інформація про напій */}
      <h1>Створення картки нового напою.</h1>
      {/*  */}
      <p>Оберіть параметри напою.</p>
      {/*  */}
      <Box>
        <DrinkCreateForm
     	    countries={countries}
          categories={categories}
	      />
      </Box>
    </Container>
  );
}
