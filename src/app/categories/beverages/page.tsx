// @/app/categories/beverages/page.tsx
import Link from 'next/link';

import Container from '@mui/material/Container';
import BeveragesCardGrid from '@/views/Categories/Beverages/BeveragesCardGrid';

export default function BeveragesPage() {
  return (
    <>
      <section>
        <h1>Напої</h1>
        {/*  */}
        <p>Порівнюємо ціни різних напоїв</p>
        <Container>
          <BeveragesCardGrid />
        </Container>
        {/*  */}
        <nav>
          <Link href="/categories/beverages/create">Додати напій</Link>
        </nav>
      </section>
    </>
  );
}