import { PAGES_RANGE } from '@/constants/bookFilters'
import { GENRES } from '@/constants/genre'
import { type Book } from '@/types/book'
import { type FilterBooksParams } from '@/types/booksFilter'

export const getBooksFiltered = ({ books, filters }: FilterBooksParams): Book[] => {
  const [minPages, maxPages] = filters['page range'] === PAGES_RANGE['>600'] ? [600, 99999] : filters['page range'].split('-')

  return books.filter(book => (
    (book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
    ((book.pages >= +minPages && book.pages <= +maxPages) || filters['page range'] === PAGES_RANGE.all) &&
    (book.genre.toLowerCase() === filters.genre.toLowerCase() || filters.genre === GENRES.all)
  ))
}
