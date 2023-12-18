// @/views/Categories/BeverageCard.tsx
import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemText } from '@mui/material';

import {IBeverage} from '@/models/interfaces';

type BeverageCardProps = {
  beverage:IBeverage;
};

const BeverageCard:React.FC<BeverageCardProps> = ({ beverage }) => {
  return (
    <Card sx={{ maxWidth: 700 }}>
      <Image src="https://source.unsplash.com/random"
        alt="Random image"
        width={640} height={480}
        style={{
          maxWidth: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
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
        <List>
          {Object.entries(beverage.prices).map(([chain, info]) => (
            <ListItem key={chain} disablePadding>
              <ListItemText
                primary={`${chain}: ${info.price} грн`}
                secondary={`Останнє оновлення: ${info.lastUpdated.toLocaleDateString()}`}
              />
            </ListItem>
          ))}
        </List>
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