'use client'

import { BOOK_FILTERS, PAGES_RANGE } from '@/constants/bookFilters'
import { GENRES } from '@/constants/genre'
import useFilterBooks from '@/hooks/useFilterBooks'
import { type AvailableBooksFilters } from '@/types/booksFilter'
import Select from '../Select'

const FilterBooksForm = () => {
  const { filters, updateFilters } = useFilterBooks()

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value
    const filterKey = e.target.name as AvailableBooksFilters

    console.log(value, filterKey)

    const newFilters = {
      ...filters,
      [filterKey]: value
    }

    updateFilters(newFilters)
  }

  return (
    <form className='flex flex-col items-center gap-2 w-full md:flex-row md:items-end'>
      <input placeholder='Busca aquí por titulo' className='bg-transparent w-full border-primary border-2 focus:shadow-md shadow-primary outline-none p-2' type='search' name={BOOK_FILTERS.title} value={filters.title} onChange={handleFilter}/>
      <Select
        label='Páginas'
        name={BOOK_FILTERS['page range']}
        value={filters['page range']}
        onChange={handleFilter}
        options={Object.values(PAGES_RANGE)}
      />
      <Select
        label='Género'
        name={BOOK_FILTERS.genre}
        value={filters.genre}
        onChange={handleFilter}
        options={Object.values(GENRES)}
      />
    </form>
  )
}

export default FilterBooksForm
