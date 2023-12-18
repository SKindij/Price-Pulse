// @/app/layout.tsx
import ThemeRegistry from '@/views/ThemeRegistry/ThemeRegistry';

import Box from '@mui/material/Box';

import { DrawerHeader } from '@/views/Layout/DrawerHeader';
import AppNavigation from '@/views/Layout/AppNavigation';


export const metadata = {
  title: 'Price-Pulse App',
  description: 'Information about the lowest prices available in retail chains of Ukraine.',
};

export default function RootLayout({ children }:{ children:React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box sx={{ display: 'flex' }}>
            {/* menu and site navigation */}
            <AppNavigation />
            {/* the main content of the site */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
              {children}
            </Box>

          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}