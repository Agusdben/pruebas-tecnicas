'use client'

import BookItem from '@/components/BookItem'
import BookList from '@/components/BookList'
import BookWithControls from '@/components/BookWithControls'
import useBooks from '@/hooks/useBooks'

const AllBooksPage: React.FC = () => {
  const { books } = useBooks()

  return (
    <BookList>
      {
        books.map(book => (
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

export default AllBooksPage
