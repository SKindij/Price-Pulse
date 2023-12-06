import styles from './page.module.css'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <main className={styles.main}>  
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>app/page.tsx</code>
      </p>
       
      <Container>
        <Typography variant="h2">Hello NEXT World</Typography>
      </Container>


        <p>Find in-depth information about Next.js features and API.</p>
    </main>
  )
}
