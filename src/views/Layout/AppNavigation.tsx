// @/views/Layout/AppNavigation.tsx
'use client';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
// icons for navigation buttons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { AppBar } from '@/views/Layout/AppBar';
import { DrawerHeader } from '@/views/Layout/DrawerHeader';
import { Drawer } from '@/views/Layout/Drawer';

const MenuItems = [
  { label: 'Головна', href: '/', icon: <HomeIcon /> },
  { label: 'Price-Pulse', href: '/categories', icon: <CategoryIcon /> },
  { label: 'Коктейлі', href: '/cocktails', icon: <LocalBarIcon /> },
  { label: 'Рецепти', href: '/recipes', icon: <RestaurantIcon /> },
];

const PlaceholderLinks = [
  { label: 'About', href: '/about', icon: <InfoIcon /> },
  { label: 'LogIn', href: '/login', icon: <LoginIcon /> },
];

const AppNavigation:React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Site AppBar */}
      <AppBar position="fixed" open={open} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
                      Price-Pulse App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Site Drawer */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* Menu Items */}
        <List>
          {MenuItems.map((item) => (
            <Link key={item.label} href={item.href} passHref>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          ))}
        </List>
        <Divider />
        {/* Placeholder Links */}
        <List>
          {PlaceholderLinks.map((link) => (
            <Link key={link.label} href={link.href} passHref>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {link.icon}
                </ListItemIcon>
                <ListItemText primary={link.label} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default AppNavigation;