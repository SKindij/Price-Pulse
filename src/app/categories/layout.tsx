// @/src/app/categories/layout.tsx
import Link from 'next/link';

export default function CategoriesLayout({
  children,
}:{ children:React.ReactNode;
}) {
  return (
    <div>
      <div>
        {/*  */}
        <h1>Категорії товарів.</h1>
        {/*  */}
        <ul>
          <li>
            <Link href="/categories/beverages">Напої</Link>
          </li>
          <li>
            <Link href="/categories/seafood">Морепродукти</Link>
          </li>
          <li>
            <Link href="/categories/household">Побутові речі</Link>
          </li>
        </ul>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
