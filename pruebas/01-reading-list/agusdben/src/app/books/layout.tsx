'use client'

import FilterBooksForm from '@/components/FilterBooksForm'
import FilterBooksContextProvider from '@/context/FilterBooksContext'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function BooksLayout ({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const menu = [
    {
      href: '/books',
      literal: 'Todos los libros'
    },
    {
      href: '/books/reading',
      literal: 'Mi lista de lectura'
    }
  ]

  return (
    <FilterBooksContextProvider>
      <section className='flex flex-col gap-6'>
        <article className='flex justify-center'>
          <FilterBooksForm />
        </article>
        <nav className='flex justify-center'>
          <ul className='flex gap-2'>
            {
              menu.map(item => (
                <li key={item.literal} className={`${pathname === item.href ? 'font-bold' : ''}`}>
                  <Link href={item.href}>{item.literal}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
        <article className='p-2'>
          {children}
        </article>
      </section>
    </FilterBooksContextProvider>
  )
}
