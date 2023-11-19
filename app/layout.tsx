import Navbar from '@/components/navbar/page'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Ivana Kowalczuk',
  description: 'Generated by create next app',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navbar/>
      <div className='mt-10 h-screen mx-10'>
      <Providers >
      {children}
      </Providers>
      </div>
      </body>
    </html>
  )
}
