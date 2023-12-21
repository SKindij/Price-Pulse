// @/views/Categories/BeverageCard.tsx
import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {IBeverage} from '@/models/interfaces';
import BeverageCardTable from '@/views/Categories/BeverageCardTable';

type BeverageCardProps = {
  beverage:IBeverage;
};

const BeverageCard:React.FC<BeverageCardProps> = ({ beverage }) => {
  const { prices } = beverage;
  return (
    <Card sx={{ maxWidth: 400 }}>
      <Image src="/images/beverages/jameson-07.webp"
        alt="Random image"
        width={320} height={320}
      />
      <CardContent>
        <Typography variant="body1">
          {beverage.category}
        </Typography>
        <Typography gutterBottom variant="h3" component="div">
          {beverage.title}
        </Typography>
        <Typography variant="body2">
          {beverage.country}
        </Typography>
        {/* Ціни */}
        <Typography variant="h4">Ціни:</Typography>
        <BeverageCardTable prices={prices} />
        <Typography variant="body2" color="text.secondary">
          {beverage.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Редагувати</Button>
        <Button size="small">Дивитися</Button>
      </CardActions>
    </Card>
  );
};

export default BeverageCard;