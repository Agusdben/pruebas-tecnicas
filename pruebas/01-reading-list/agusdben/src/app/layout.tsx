import ReadingBooksContextProvider from '@/context/ReadingBooksContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AppHeader from '@/components/AppHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crazy books',
  description: 'This is a technical test based on a list of books to read, extracted from the website www.pruebastecnicas.com created by midudev.'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + 'h-screen w-screen overflow-x-hidden bg-gradient-to-b from-background-start via-background-via to-background-end text-white'}>
        <ReadingBooksContextProvider>
          <div className='min-h-screen grid grid-rows-layout gap-4 max-w-7xl m-auto'>
            <AppHeader />
            <main className='p-2'>{children}</main>
            <footer>footer</footer>
          </div>
        </ReadingBooksContextProvider>
      </body>
    </html>
  )
}
