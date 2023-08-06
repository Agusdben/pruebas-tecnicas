'use client'

import Breadcrumb from '@/components/Breadcrumb'
import FilterBooksForm from '@/components/FilterBooksForm'
import FilterBooksContextProvider from '@/context/FilterBooksContext'
import { usePathname } from 'next/navigation'

export default function BooksLayout ({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <FilterBooksContextProvider>
      <section>
        <header>
          <FilterBooksForm />
          <Breadcrumb breadcrumb={pathname.split('/').slice(1)}/>
        </header>
        <article>
          {children}
        </article>
      </section>
    </FilterBooksContextProvider>
  )
}
