// @/app/categories/beverages/page.tsx
import Link from 'next/link';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';
import BeveragesCardGrid from '@/views/Categories/Beverages/BeveragesCardGrid';

export default function BeveragesPage() {
  return (
    <section>
      <h1>Напої</h1>
		    {/*  */}
      <nav>
        <Link href="/categories/beverages/create">
		    <Button color="secondary">Додати напій</Button>
		  </Link>
      </nav>
      {/*  */}
      <p>Порівнюємо ціни різних напоїв</p>
      <Container>
        <BeveragesCardGrid />
      </Container>
    </section>
  );
}