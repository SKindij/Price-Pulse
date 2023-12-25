// @/app/categories/beverages/[beverageId]/edit/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <h2>404 Not Found</h2>
      <p>Could not find the requested beverage.</p>
      <Link
        href="/categories/beverages"
      >
          Go Back
      </Link>
    </main>
  );
}


