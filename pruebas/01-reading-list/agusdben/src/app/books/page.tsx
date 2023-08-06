'use client'

import BookCard from '@/components/BookCard'
import BookList from '@/components/BookList'
import useBooks from '@/hooks/useBooks'
import useReadingBooks from '@/hooks/useReadingBooks'

const AllBooksPage: React.FC = () => {
  const { books } = useBooks()
  const { HandleRemoveAddReadingBook } = useReadingBooks()

  return (
    <BookList>
      {
        books.map(book => (
          <li className='' onClick={() => { HandleRemoveAddReadingBook(book) }} key={book.title}>
            <BookCard book={book}/>
          </li>
        ))
      }
    </BookList>
  )
}

export default AllBooksPage
