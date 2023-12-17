// @/app/page.tsc
import styles from './page.module.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Main Screen</h1>
      {/*  */}

      <Container>
        <Typography variant="h4">Hello NEXT World</Typography>
        {/*  */}
        <nav>
          <Link href="/categories/beverages">Напої</Link>
          <Link href="/categories/seafood">Морепродукти</Link>
          <Link href="/categories/household">Побутові речі</Link>
        </nav>
      </Container>

      <p>Find in-depth information about Next.js features and API.</p>
    </main>
  );
}
