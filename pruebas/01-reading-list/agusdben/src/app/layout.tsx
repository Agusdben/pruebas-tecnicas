import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crazy books',
  description: 'This is a technical test based on a list of books to read, extracted from the website www.pruebastecnicas.com created by midudev.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='grid grid-rows-layout h-screen w-screen overflow-auto'>
          <header>header</header>
          <main>{children}</main>
          <footer>footer</footer>
        </div>
      </body>
    </html>
  )
}
