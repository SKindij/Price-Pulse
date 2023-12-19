// @/app/categories/layout.tsx

import Link from 'next/link';

import AppBar from '@mui/material/AppBar';

import CategoryIcon from '@mui/icons-material/Category';




const MenuPages = [
  { label: 'Напої', href: '/categories/beverages', icon: <CategoryIcon /> },
  { label: 'Морепродукти', href: '/categories/seafood', icon: <CategoryIcon /> },
  { label: 'Побутові речі', href: '/categories/household', icon: <CategoryIcon /> },
];




export default function CategoriesLayout({
  children,
}:{ children:React.ReactNode;
}) {
  return (
    <section>
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
      <section>
        {children}
      </section>
    </section>
  );
}
