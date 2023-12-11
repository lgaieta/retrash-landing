import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { inter } from './font';
import { Providers } from './providers';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'ReTrash',
  description: 'Descripcion de ReTrash',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <Providers>
          <div className='flex w-full flex-col'>
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
