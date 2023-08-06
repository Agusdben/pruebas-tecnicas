'use client'

import { useEffect, useState } from 'react'
import AppNav from '../AppNav'
import AppLogo from '../AppLogo'
import { SolidBookmarkIcon } from '../Icons'
import Link from 'next/link'
import useReadingBooks from '@/hooks/useReadingBooks'

const AppHeader: React.FC = () => {
  const { readingBooks } = useReadingBooks()
  const [showToolTip, setShowToolTip] = useState(false)

  useEffect(() => {
    setShowToolTip(true)

    const removeToolTip = setTimeout(() => {
      setShowToolTip(false)
    }, 1500)

    return () => {
      clearTimeout(removeToolTip)
    }
  }, [readingBooks.length])

  return (
    <header className='flex gap-2 justify-between px-2 py-4 sticky top-0 z-50 bg-gradient-to-b from-background-start via-background-via to-transparent'>
      <section>
        <Link href={'/'}><h1><AppLogo /></h1></Link>
      </section>
      <section className='flex gap-6'>
        <AppNav />
        <Link className='bg-primary p-2 rounded-full relative' href='/books/reading'>
          <SolidBookmarkIcon />
          <span className={`absolute text-white max-h-0 top-full mt-2 bg-primary left-1/2 -translate-x-1/2 px-1 rounded-md transition-all overflow-hidden
          ${showToolTip ? 'max-h-7' : ''}
          `}>{readingBooks.length}</span>
        </Link>
      </section>
    </header>
  )
}

export default AppHeader
