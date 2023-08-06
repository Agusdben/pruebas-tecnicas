import { useState, useEffect } from 'react'
import { getAllBooks } from '@/services/books.services'
import { type Book } from '@/types/book'
import { getBooksFiltered } from '@/services/filter.services'
import useFilterBooks from './useFilterBooks'

const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const { filters } = useFilterBooks()

  useEffect(() => {
    (async () => {
      setLoading(true)
      setBooks(await getAllBooks())
    })()
      .catch(() => {
        setError('Unable to load books, try again later')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {
    books: getBooksFiltered({ books, filters }),
    error,
    loading
  }
}
export default useBooks
