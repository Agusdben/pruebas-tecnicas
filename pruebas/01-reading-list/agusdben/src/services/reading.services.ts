import { LOCAL_STORAGE } from '@/constants/localStorage'
import { type Book } from '@/types/book'

export const storeNewBook = async (book: Book): Promise<Book[]> => {
  const storedBooks = await getStoredReadingBooks()
  const booksToSave = storedBooks.concat(book)
  window.localStorage.setItem(LOCAL_STORAGE.reading, JSON.stringify(booksToSave))

  return booksToSave
}

export const removeBookFromStore = async (book: Book): Promise<Book[]> => {
  const storedBooks = await getStoredReadingBooks()
  const booksToSave = storedBooks.filter(bookStored => bookStored.title !== book.title)
  window.localStorage.setItem(LOCAL_STORAGE.reading, JSON.stringify(booksToSave))

  return booksToSave
}

export const getStoredReadingBooks = async (): Promise<Book[]> => {
  const storedBooks = window.localStorage.getItem(LOCAL_STORAGE.reading)

  if (storedBooks === null) {
    return []
  }

  return JSON.parse(storedBooks)
}
