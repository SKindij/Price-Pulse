// @/app/page.tsc
import styles from './page.module.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Price-Pulse: твій помічник у виборі товарів, рецептів та коктейлів.</h1>
      {/*  */}

      <Container>
        {/*  */}
        <Image
          src="/images/main-page.jpg"
          width={500} height={500}
          alt="Picture of Price-Pulse"
        />
      </Container>

    </main>
  );
}
