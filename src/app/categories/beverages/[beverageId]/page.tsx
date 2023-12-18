// @/app/categories/beverages/[beverageId]/page.tsx
import { Metadata } from 'next';

import { fetchBeverageById } from '@/services/get-data';

import Typography from '@mui/material/Typography';
import styles from './page.module.css';

import BeverageCard from '@/views/Categories/BeverageCard';

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
    <section>
      <Typography variant="h1" className={styles.header}>
        Обраний напій:
      </Typography>
      {/* Інформація про напій */}
      <BeverageCard beverage={beverage}/>

    </section>
  );
}
