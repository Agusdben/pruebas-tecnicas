import { type BOOK_FILTERS } from '@/constants/bookFilters'
import { type Book } from './book'

export type AvailableBooksFilters = keyof typeof BOOK_FILTERS

export type BookFilter = { [key in AvailableBooksFilters]: string }

interface FilterBooksParams {
  books: Book[]
  filters: BookFilter
}
