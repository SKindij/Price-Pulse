// @/app/categories/beverages/[beverageId]/edit/page.tsx
// import DrinkEditForm from '@/app/ui/invoices/edit-form';

import styles from './page.module.css';
import { Metadata } from 'next';
import { fetchBeverageById } from '@/services/get-data';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import BeverageCard from '@/views/Categories/Beverages/BeverageCard';

type Props = {
  params:{ // only property that is an object
    beverageId:string;
  };
};

// function defines page metadata for a specific drink
export async function generateMetadata(
  {params: {beverageId}}:Props):Promise<Metadata> {
  // to get the data of a specific drink
  const beverage = await fetchBeverageById(Number(beverageId));

  if (!beverage) {
    return {
      title: 'Loading...'
    };
  }

  return {
    // defining meta title of page
    title: beverage.title,
  };
};

export default async function BeveragePage({params: {beverageId}}:Props) {
  // to get the data of a specific drink
  const beverage = await fetchBeverageById(Number(beverageId));

  if (!beverage) {
    return <div>Такого напою не знайдено...</div>;
  }

  return (
    <Container>
      <Typography variant="h2" className={styles.header}>
        Обраний напій:
      </Typography>
      {/* Інформація про напій */}
      <BeverageCard beverage={beverage}/>

    </Container>
  );
}
