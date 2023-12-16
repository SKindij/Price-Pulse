// @/src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Header} from '@/src/views/Header';
import { Footer} from '@/src/views/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata:Metadata = {
  title: 'Price-Pulse App',
  description: 'Information about the lowest prices available in retail chains of Ukraine.',
};

export default function RootLayout({
  children
}:{ children:React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* site navigation and user authentication */}
        <Header />
        {/*  */}
        <main className='container'>
          {children}
        </main>
        {/*  */}
        <Footer />
      </body>
    </html>
  );
}
