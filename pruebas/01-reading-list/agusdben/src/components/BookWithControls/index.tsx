import { isItemInArrayByKeyComparison } from '@/utils'
import BookmarkBookButton from '../BookmarkBookButton'
import BookCard from '../BookCard'
import useReadingBooks from '@/hooks/useReadingBooks'
import { type Book } from '@/types/book'

interface Props {
  book: Book
}

const BookWithControls: React.FC<Props> = ({ book }) => {
  const { readingBooks, HandleRemoveAddReadingBook } = useReadingBooks()

  return (
    <div className='w-full h-full'>
      <BookCard book={book}/>
      <div className='absolute top-2 right-2'>
        <BookmarkBookButton
          isBookmarked={isItemInArrayByKeyComparison(book, readingBooks, 'title')}
          onClick={() => { HandleRemoveAddReadingBook(book) }}
        />
      </div>
    </div>
  )
}

export default BookWithControls
