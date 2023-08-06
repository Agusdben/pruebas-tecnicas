import { type Book } from '@/types/book'
import Image from 'next/image'
import React from 'react'

interface Props {
  book: Book
}

const BookCard: React.FC<Props> = ({ book }) => {
  return (
    <div className='group flex-1 flex flex-col gap-1 text-left'>
      <figure className='relative aspect-book w-full'>
        <Image
          fill
          sizes='100%'
          priority={true}
          className='object-cover rounded-md group-hover:rotate-1 origin-top-left transition-transform duration-200'
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
