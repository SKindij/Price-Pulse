// @/views/Categories/CategoriesHeader.tsx
'use client';
import styles from '@/views/styles/Header.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// MUI components
import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// icons for navigation elements
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import KitchenIcon from '@mui/icons-material/Kitchen';
import SearchIcon from '@mui/icons-material/Search';
// type for each navigation item
type NavLink = {
  label:string;
  href:string;
  icon:JSX.Element;
};
// data for site navigation elements
const СategoriesPages:NavLink[] = [
  { label: 'Explore', href: '/categories', icon: <StorefrontIcon /> },
  { label: 'Напої', href: '/categories/beverages', icon: <LocalBarIcon /> },
  { label: 'Морепродукти', href: '/categories/seafood', icon: <RestaurantIcon /> },
  { label: 'Побутові речі', href: '/categories/household', icon: <KitchenIcon /> },
];

const CategoriesHeader = () => {
  // hook to get current path (URL) of the page
  const pathname = usePathname();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  return (
    <>
      <AppBar position='sticky'
        sx={{ backdropFilter: 'blur(5px)' }}
      >
        <Toolbar className={styles.toolbarTopMost}>
          <Stack
            direction={isSmallScreen ? 'column' : 'row'}
            spacing={3}
            sx={{
              marginLeft: isSmallScreen ? '15px' : '30px',
              flexWrap: isSmallScreen ? 'wrap' : 'nowrap',
            }}
          >
            {СategoriesPages.map(({ label, href, icon }) => (
              <Link href={href} key={label}>
                {/* Сategory Page */}
                <Box className={pathname === href ? styles.navLinkContainer : styles.navLinkContainerUnselected}
                  sx={{
                    marginBottom: isSmallScreen ? '8px' : '0',
                    width: isMediumScreen ? '50%' : 'auto',
                  }}
                >
                  <Typography fontSize='15px' fontWeight='700'>
                    {icon} {label}
                  </Typography>
                </Box>
              </Link>
            ))}
          </Stack>
          <Box>
            <Link href='/categories/search'>
              <IconButton>
                <SearchIcon sx={{ color: grey[50], ':hover': { color: '#FFDE00' } }} />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default CategoriesHeader;