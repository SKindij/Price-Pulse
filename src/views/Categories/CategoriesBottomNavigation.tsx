// @/views/Categories/CategoriesBottomNavigation.tsx
'use client';
import { useState } from 'react';

import {NextLinkComposed} from '@/views/Categories/NextMuiLink';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
// icons for navigation elements
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StorefrontIcon from '@mui/icons-material/Storefront';

export default function CategoriesBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);

        }}
      >
        <BottomNavigationAction label="Напої" component={NextLinkComposed} to={{pathname: '/categories/beverages'}} icon={<LocalBarIcon />} />
        <BottomNavigationAction label="Морепродукти" component={NextLinkComposed} to={{pathname: '/categories/seafood'}} icon={<RestaurantIcon />} />
        <BottomNavigationAction label="Побутові речі" component={NextLinkComposed} to={{pathname: '/categories/household'}} icon={<StorefrontIcon />} />
      </BottomNavigation>
    </Paper>
  );
}