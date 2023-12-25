// @/app/categories/beverages/[beverageId]/edit/page.tsx
import { notFound } from 'next/navigation';
// import DrinkEditForm from '@/views/Categories/Beverages/DrinkEditForm';
// import Breadcrumbs from '@/views/Categories/Beverages/BreadCrumbs';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import BeverageCard from '@/views/Categories/Beverages/BeverageCard';

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
      <Typography variant="h2">
        Обраний напій:
      </Typography>
      {/* Інформація про напій */}
      <BeverageCard beverage={beverage}/>

    </Container>
  );
}
