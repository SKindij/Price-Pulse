// @/app/categories/layout.tsx
// MUI components
import Box from '@mui/material/Box';
// views (design) elements
import CategoriesBottomNavigation from '@/views/Categories/CategoriesBottomNavigation';

export default function CategoriesLayout({
  children,
}:{ children:React.ReactNode;
}) {
  return (
    <Box>
      <Box component="section" sx={{ mb: 6 }}>
        {/*  */}
        {children}
      </Box>
      <CategoriesBottomNavigation />
	  </Box>
  );
}