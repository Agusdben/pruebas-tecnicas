import Link from 'next/link'
import React from 'react'

const AppNav: React.FC = () => {
  const menu = [
    {
      href: '/',
      literal: 'home'
    },
    {
      href: '/books',
      literal: 'books'
    }
  ]

  return (
    <nav>
      <ul className='flex gap-2'>
        {
          menu.map(item => (
            <li key={item.literal}>
              <Link href={item.href}>{item.literal}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default AppNav
