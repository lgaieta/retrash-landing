import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import { inter } from './font'

export const metadata: Metadata = {
  title: 'ReTrash',
  description: 'Descripcion de ReTrash'
}

export default function RootLayout ({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
