// @/app/categories/beverages/[beverageId]/edit/page.tsx
import { notFound } from 'next/navigation';
// import DrinkEditForm from '@/views/Categories/Beverages/DrinkEditForm';
import BreadCrumbs from '@/views/Categories/CategoriesBreadCrumbs';

import Container from '@mui/material/Container';

import BeverageCard from '@/views/Categories/Beverages/BeverageCard';

// icons for breadcrumbs elements
import HomeIcon from '@mui/icons-material/Home';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import GrainIcon from '@mui/icons-material/Grain';



// get information from the database
import { fetchBeverageById } from '@/services/get-data';

type Props = {
  params:{ // only property that is an object
    beverageId:string;
  };
};


export default async function BeverageEditPage({params: {beverageId}}:Props) {
  // to get the data of a specific drink
  const beverage = await fetchBeverageById(Number(beverageId));

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
      {/* Інформація про напій */}
      <BeverageCard beverage={beverage}/>

    </Container>
  );
}
