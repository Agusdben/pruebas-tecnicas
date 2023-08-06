import { type ApiResponseBooks, type Book } from '@/types/book'
import books from '@/moks/books.json'

export const mappedBooks = (apiBooks: ApiResponseBooks): Book[] => {
  return Object.values(apiBooks.library).map((lib): Book => {
    return {
      author: lib.book.author,
      cover: lib.book.cover,
      genre: lib.book.genre,
      ISBN: lib.book.ISBN,
      pages: lib.book.pages,
      synopsis: lib.book.synopsis,
      title: lib.book.title,
      year: lib.book.year
    }
  })
}

export const getAllBooks = async (): Promise<Book[]> => {
  return mappedBooks(books)
}
