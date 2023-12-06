import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
     
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
       
          <p>Find in-depth information about Next.js features and API.</p>
       
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
       
    </main>
  )
}
