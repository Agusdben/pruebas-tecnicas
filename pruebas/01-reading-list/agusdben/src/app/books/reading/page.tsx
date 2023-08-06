'use client'

import BookItem from '@/components/BookItem'
import BookList from '@/components/BookList'
import BookWithControls from '@/components/BookWithControls'
import useReadingBooks from '@/hooks/useReadingBooks'

const ReadingBooksPage: React.FC = () => {
  const { readingBooks } = useReadingBooks()

  return (
    <BookList>
      {
        readingBooks.map(book => (
          <BookItem
            key={book.title}
          >
            <BookWithControls book={book}/>
          </BookItem>
        ))
      }
    </BookList>
  )
}

export default ReadingBooksPage
