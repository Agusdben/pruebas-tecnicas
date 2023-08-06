interface Props {
  children: React.ReactNode
}

const BookItem: React.FC<Props> = ({ children }) => {
  return (
    <li
      className='relative flex h-auto items-start'
    >
      {children}
    </li>
  )
}

export default BookItem
