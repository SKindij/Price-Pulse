// @/src/app/categories/beverages/[beverageId]/page.tsx
import { Metadata } from 'next';

import { fetchBeverageById } from '@/src/services/get-data';

import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import styles from './page.module.css';

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
      <Typography variant="h1" className={styles.header}>
        Обраний напій:
      </Typography>
      {/* Інформація про напій */}
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">{beverage.category}</Typography>
        <Typography variant="h2" className={styles.productTitle}>
          {beverage.title}
        </Typography>
        <Typography variant="body1">{beverage.country}</Typography>
        <Typography variant="body1" className={styles.productDescription}>
          {beverage.description}
        </Typography>
        {/* Ціни */}
        <Typography variant="h3" sx={{ mt: 2 }}>Ціни:</Typography>
        <List className={styles.list}>
          {Object.entries(beverage.prices).map(([chain, info]) => (
            <ListItem key={chain} disablePadding>
              <ListItemText
                primary={`${chain}: ${info.price} грн`}
                secondary={`Останнє оновлення: ${info.lastUpdated.toLocaleDateString()}`}
              />
            </ListItem>
          ))}
        </List>

        {/* Додайте інші дані про напій для відображення */}
      </Box>
    </section>
  );
}
