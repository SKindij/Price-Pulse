// @/src/app/categories/beverages/[beverageId]/page.tsx
import { Metadata } from 'next';

import { fetchBeverageById } from '@/src/services/get-data';

import { Box, Typography } from '@mui/material';

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
    return <div>Loading...</div>;
  }

  return (
    <section>
      <Typography variant="h1">Обраний напій:</Typography>
      <Box>
        <Typography variant="h2">{beverage.title}</Typography>
        <Typography variant="body1">{beverage.description}</Typography>

        <Typography variant="h3">Ціни:</Typography>
        <ul>
          {Object.entries(beverage.prices).map(([chain, info]) => (
            <li key={chain}>
              {chain}: {info.price} ({info.lastUpdated.toLocaleDateString()})
            </li>
          ))}
        </ul>

        {/* Додайте інші дані про напій для відображення */}
      </Box>
    </section>
  );
}
