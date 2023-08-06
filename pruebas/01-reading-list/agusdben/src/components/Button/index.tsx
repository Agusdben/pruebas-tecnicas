import { type ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  rounded?: boolean
  onClick: () => void
}

const Button: React.FC<Props> = ({ children, onClick, rounded, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={` bg-primary hover:brightness-90 transition-all
      ${rounded === true ? 'aspect-square rounded-full p-2' : 'rounded-sm px-4 py-2'}`
      }
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
