interface Props {
  children: React.ReactNode
}

const BookList: React.FC<Props> = ({ children }) => {
  return (
    <ul className='grid grid-cols-books gap-4 items-start place-content-center'>
      {children}
    </ul>
  )
}

export default BookList
