import Button from '../Button'
import { RegularBookmarkIcon, SolidBookmarkIcon } from '../Icons'

interface Props {
  isBookmarked: boolean
  onClick: () => void
}

const BookmarkBookButton: React.FC<Props> = ({ onClick, isBookmarked }) => {
  return (
    <Button rounded onClick={() => { onClick() }}>
      {
        isBookmarked
          ? <SolidBookmarkIcon />
          : <RegularBookmarkIcon />
      }
    </Button>
  )
}

export default BookmarkBookButton
