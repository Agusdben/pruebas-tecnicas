'use client'

import { BOOK_FILTERS, PAGES_RANGE } from '@/constants/bookFilters'
import { GENRES } from '@/constants/genre'
import useFilterBooks from '@/hooks/useFilterBooks'
import { type AvailableBooksFilters } from '@/types/booksFilter'

const FilterBooksForm = () => {
  const { filters, updateFilters } = useFilterBooks()

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value
    const filterKey = e.target.name as AvailableBooksFilters

    const newFilters = {
      ...filters,
      [filterKey]: value
    }

    updateFilters(newFilters)
  }

  return (
    <form>
      <input type='text' name={BOOK_FILTERS.title} value={filters.title} onChange={handleFilter}/>
      <select name={BOOK_FILTERS['page range']} value={filters['page range']} onChange={handleFilter}>
        {
          Object.values(PAGES_RANGE).map((range) => {
            return (
              <option key={range} value={range}>{range}</option>
            )
          })
        }
      </select>
      <select name={BOOK_FILTERS.genre} value={filters.genre} onChange={handleFilter}>
        {
          Object.values(GENRES).map(genre => (
            <option className='capitalize' key={genre} value={genre}>{genre}</option>
          ))
        }
      </select>
    </form>
  )
}

export default FilterBooksForm
