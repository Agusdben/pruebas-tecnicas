import { FilterBooksContext } from '@/context/FilterBooksContext'
import { type BookFilter } from '@/types/booksFilter'
import { useContext } from 'react'

const useFilterBooks = () => {
  const { filters, setFilters } = useContext(FilterBooksContext)

  const updateFilters = (filters: BookFilter) => {
    setFilters(filters)
  }
  return {
    filters,
    updateFilters
  }
}

export default useFilterBooks
