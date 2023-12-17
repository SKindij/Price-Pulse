// @/app/categories/beverages/page.tsx
import Link from 'next/link';

export default function BeveragesPage() {
  return (
    <>
      <section>
        <h1>Напої</h1>

        <p>Порівнюємо ціни різних напоїв</p>
        {/*  */}
        <nav>
          <Link href="/categories/beverages/create">Додати напій</Link>
        </nav>
      </section>

    </>
  );
}
