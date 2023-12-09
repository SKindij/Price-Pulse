import styles from './page.module.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Main Screen</h1>
      <p>Get started by editing&nbsp;
        <code className={styles.code}>app/page.tsx</code>
      </p>

      <Container>
        <Typography variant="h2">Hello NEXT World</Typography>
      </Container>
      <nav>
        <Link href="/categories/beverages">Напої</Link>
      </nav>

      <p>Find in-depth information about Next.js features and API.</p>
    </main>
  );
}
