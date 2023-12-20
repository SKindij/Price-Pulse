// @/app/categories/layout.tsx
// MUI components
import Box from '@mui/material/Box';
// views (design) elements
import CategoriesHeader from '@/views/Categories/CategoriesHeader';

export default function CategoriesLayout({
  children,
}:{ children:React.ReactNode;
}) {
  return (
    <Box>
	  <CategoriesHeader />
      <section>
        <h1>Категорії товарів.</h1>
        {/*  */}
        {children}
      </section>
	  </Box>
  );
}