// @/views/Categories/BeverageCard.tsx
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';

import {IBeverage} from '@/models/interfaces';
import BeverageCardTable from '@/views/Categories/BeverageCardTable';

type BeverageCardProps = {
  beverage:IBeverage;
};

const BeverageCard:React.FC<BeverageCardProps> = ({ beverage }) => {
  const { prices } = beverage;
  const firstBeverageLetter = beverage.title.charAt(0);

  return (
    <Card sx={{ maxWidth: 420, boxShadow: 3, borderRadius: 8 }}>
	  {/*  */}
	  <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[500] }} aria-label="beverage">
            {firstBeverageLetter}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={beverage.country}
        subheader={beverage.category}
      />
	  {/*  */}
	  <CardMedia component="img"
        sx={{ objectFit: 'cover', height: '100%', }}
        image={beverage.imageUrl || '/images/cocktails/default-coctail.jpg'}
        alt={beverage.title}
      />
	  {/*  */}
      <CardContent>
        <Typography variant="h3" color="secondary">
          {beverage.title}
        </Typography>
        {/* Таблиця із цінами по супермаркетах */}
        <Typography variant="body2" mb={1}>
		  Найнижчі ціни в UAH, що зустрічалися в цих супермаркетах:
        </Typography>
        <BeverageCardTable prices={prices} />
        {/* Опис напою */}
        <Typography variant="body2" mt={2}>
          {beverage.description}
        </Typography>
      </CardContent>
	  {/*  */}
      <CardActions>
	    <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button size="small" color="primary">Редагувати</Button>
        <Button size="small" color="secondary">Зберегти</Button>
      </CardActions>
    </Card>
  );
};

export default BeverageCard;