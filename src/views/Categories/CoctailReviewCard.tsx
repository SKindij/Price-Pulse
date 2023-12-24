// @/views/Categories/CoctailReviewCard.tsx
'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { ICocktail } from '@/models/interfaces';
interface ExpandMoreProps extends IconButtonProps {
  expand:boolean;
}
interface CoctailReviewCardProps {
  cocktail:ICocktail;
}

// Оголосимо StyledExpandMore як компонент, а не виклик styled()
// eslint-disable-next-line @typescript-eslint/type-annotation-spacing
const StyledExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CoctailReviewCard({ cocktail }:CoctailReviewCardProps) {
  const [expanded, setExpanded] = React.useState(false);
  const firstCoctailLetter = cocktail.title.charAt(0);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 360, boxShadow: 3, borderRadius: 8 }}>
      {/*  */}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {firstCoctailLetter}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={cocktail.title}
        subheader={cocktail.alcoholic ? 'Alcoholic' : 'Non-alcoholic'}
      />
      <CardMedia component="img"
        height="320"
        image={cocktail.imageUrl || '/images/cocktails/default-coctail.jpg'}
        alt={cocktail.title}
      />
	  {/*  */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Інформація
        </Typography>
      </CardContent>
	  {/*  */}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <StyledExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </StyledExpandMore>
      </CardActions>
	  {/*  */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Приготування:</Typography>
          <Typography paragraph>
		    Тип склянки: {cocktail.glassType}
          </Typography>
          <Typography paragraph>Інгредієнти:</Typography>
          <ul>
            {Object.entries(cocktail.ingredients || {}).map(([ingredient, quantity], index) => (
              <li key={index}>{`${ingredient}: ${quantity}`};</li>
            ))}
          </ul>
		  <Typography paragraph>Інструкція:</Typography>
          <ol>
            {cocktail.instructions?.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </CardContent>
      </Collapse>
    </Card>
  );
}