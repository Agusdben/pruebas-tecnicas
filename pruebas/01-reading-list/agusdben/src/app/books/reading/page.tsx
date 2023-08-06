'use client'

import BookCard from '@/components/BookCard'
import BookList from '@/components/BookList'
import useReadingBooks from '@/hooks/useReadingBooks'

const ReadingBooksPage: React.FC = () => {
  const { readingBooks, HandleRemoveAddReadingBook } = useReadingBooks()

  return (
    <BookList>
      {
        readingBooks.map(book => (
          <li key={book.title}>
            <button className='w-full h-full' onClick={() => { HandleRemoveAddReadingBook(book) }}>
              <BookCard book={book} />
            </button>
          </li>
        ))
      }
    </BookList>
  )
}

export default ReadingBooksPage
