// @/views/Categories/CocktailsImageList.tsx
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Image from 'next/image';

import { cocktailsData } from '@/seeder/placeholder-data';

export default function CocktailsImageList() {
  return (
    <ImageList sx={{ width: '100%' }}>
      {cocktailsData.map((item) => (
        <ImageListItem key={item.imageUrl}>
          {item.imageUrl && (
            <Image
              loading="lazy"
              src={item.imageUrl}
              alt={item.title}
              width={500}
              height={500}
            />
          )}
          <ImageListItemBar
            title={item.title}
            subtitle={<span>{item.alcoholic ? 'Алкогольний' : 'Безалкогольний'}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
