// @/app/categories/beverages/create/page.tsx
import Container from '@mui/material/Container';
// import DrinkCreateForm from '@/views/Categories/Beverages/DrinkCreateForm';
import BreadCrumbs from '@/views/Categories/CategoriesBreadCrumbs';
// icons for breadcrumbs elements
import HomeIcon from '@mui/icons-material/Home';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import GrainIcon from '@mui/icons-material/Grain';


export default function CreateBeveragePage() {
  return (
    <Container>
      <BreadCrumbs
        breadcrumbs={[
          { label: 'Головна', href: '/', icon: <HomeIcon /> },
          { label: 'Напої', href: '/categories/beverages', icon: <LocalBarIcon /> },
          { label: 'Створення напою', icon: <GrainIcon /> }
        ]}
      />
      {/* Інформація про напій */}
      <h1>Створення картки нового напою.</h1>
      {/*  */}
      <p>Оберіть параметри напою.</p>

    </Container>
  );
}
