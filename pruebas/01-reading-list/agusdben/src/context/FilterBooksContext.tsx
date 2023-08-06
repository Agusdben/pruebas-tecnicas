'use client'

import { PAGES_RANGE } from '@/constants/bookFilters'
import { GENRES } from '@/constants/genre'
import { type BookFilter } from '@/types/booksFilter'
import { useState, createContext, type Dispatch, type SetStateAction } from 'react'

interface Context {
  filters: BookFilter
  setFilters: Dispatch<SetStateAction<BookFilter>>
}

const FILTERS_INITIAL_VALUE = {
  'page range': PAGES_RANGE.all,
  genre: GENRES.all,
  title: ''
}

export const FilterBooksContext = createContext<Context>({ filters: FILTERS_INITIAL_VALUE, setFilters: () => {} })

interface Props {
  children: React.ReactNode
}

const FilterBooksContextProvider = ({ children }: Props) => {
  const [filters, setFilters] = useState<BookFilter>(FILTERS_INITIAL_VALUE)

  return (
    <FilterBooksContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterBooksContext.Provider>
  )
}

export default FilterBooksContextProvider
