import { useContext } from 'react'
import { removeBookFromStore, storeNewBook } from '@/services/reading.services'
import { getBooksFiltered } from '@/services/filter.services'
import useFilterBooks from './useFilterBooks'
import { ReadingBooksContext } from '@/context/ReadingBooksContext'
import { type Book } from '@/types/book'
import { isItemInArrayByKeyComparison } from '@/utils'

const useReadingBooks = () => {
  const { readingBooks, error, loading, setReadingBooks } = useContext(ReadingBooksContext)
  const { filters } = useFilterBooks()

  const addNewReadingBook = (book: Book) => {
    (async () => {
      setReadingBooks(await storeNewBook(book))
    })()
      .catch(() => {
        console.error('Failed when add new book to read')
      })
  }

  const removeReadingBook = (book: Book) => {
    (async () => {
      setReadingBooks(await removeBookFromStore(book))
    })()
      .catch(() => {
        console.error('Failed when remove book to read')
      })
  }

  const HandleRemoveAddReadingBook = (book: Book) => {
    isItemInArrayByKeyComparison(book, readingBooks, 'title')
      ? removeReadingBook(book)
      : addNewReadingBook(book)
  }

  return {
    readingBooks: getBooksFiltered({ books: readingBooks, filters }),
    error,
    loading,
    HandleRemoveAddReadingBook
  }
}

export default useReadingBooks
