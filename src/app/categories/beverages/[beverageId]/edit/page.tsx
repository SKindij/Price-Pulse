// @/app/categories/beverages/[beverageId]/edit/page.tsx
import { notFound } from 'next/navigation';
import DrinkEditForm from '@/views/Categories/Beverages/DrinkEditForm';
import Container from '@mui/material/Container';
import BreadCrumbs from '@/views/Categories/CategoriesBreadCrumbs';
// icons for breadcrumbs elements
import HomeIcon from '@mui/icons-material/Home';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import GrainIcon from '@mui/icons-material/Grain';

import BeverageCard from '@/views/Categories/Beverages/BeverageCard';

// get information from the database
import { fetchBeverageById, fetchAllCountries, fetchDrinkCategories } from '@/services/get-data';

type Props = {
  params:{ // only property that is an object
    beverageId:string;
  };
};


export default async function BeverageEditPage({params: {beverageId}}:Props) {
  // get data of a specific drink and necessary lists of data
  const [beverage, countries, categories] = await Promise.all([
    fetchBeverageById(Number(beverageId)),
    fetchAllCountries(),
    fetchDrinkCategories()
  ]);

  if (!beverage) {
    notFound();
  }

  return (
    <Container>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Головна', href: '/', icon: <HomeIcon /> },
          { label: 'Напої', href: '/categories/beverages', icon: <LocalBarIcon /> },
          { label: 'Редагування напою', icon: <GrainIcon /> }
        ]}
      />
      {/* Зміна інформації про напій */}
      <h1>Редагування картки існуючого напою.</h1>
	    {/*  */}
      <DrinkEditForm
        beverage={beverage}
     	  countries={countries}
		    categories={categories}
	  />
    </Container>
  );
}
