'use client'

import { getStoredReadingBooks } from '@/services/reading.services'
import { type Book } from '@/types/book'
import { useState, createContext, useEffect, type Dispatch, type SetStateAction } from 'react'

interface Context {
  readingBooks: Book[]
  loading: boolean
  error: string
  setReadingBooks: Dispatch<SetStateAction<Book[]>>
}

const READING_BOOKS_INITIAL_VALUE = {
  readingBooks: [],
  loading: true,
  error: '',
  setReadingBooks: () => {}
}

export const ReadingBooksContext = createContext<Context>(READING_BOOKS_INITIAL_VALUE)

interface Props {
  children: React.ReactNode
}

const ReadingBooksContextProvider = ({ children }: Props) => {
  const [readingBooks, setReadingBooks] = useState<Book[]>(READING_BOOKS_INITIAL_VALUE.readingBooks)
  const [error, setError] = useState(READING_BOOKS_INITIAL_VALUE.error)
  const [loading, setLoading] = useState(READING_BOOKS_INITIAL_VALUE.loading)

  useEffect(() => {
    (async () => {
      console.log('ejecute el efecto de los reading books')
      setLoading(true)
      setReadingBooks(await getStoredReadingBooks())
    })()
      .catch(() => {
        setError('Unable to load books, try again later')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [setReadingBooks])

  return (
    <ReadingBooksContext.Provider value={{ readingBooks, error, loading, setReadingBooks }}>
      {children}
    </ReadingBooksContext.Provider>
  )
}

export default ReadingBooksContextProvider
