import { type Book } from '@/types/book'
import Image from 'next/image'
import React from 'react'

interface Props {
  book: Book
}

const BookCard: React.FC<Props> = ({ book }) => {
  return (
    <div>
      <figure className='relative aspect-book w-full'>
        <Image
          fill
          sizes='100%'
          priority={true}
          className='object-cover'
          src={book.cover}
          alt={`${book.title} by ${book.author.name}`}
        />
      </figure>
      <div>
        <p>{book.title}</p>
      </div>
    </div>
  )
}

export default BookCard
