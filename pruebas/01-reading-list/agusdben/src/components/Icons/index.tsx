type Props = React.SVGProps<SVGSVGElement>

const WIDTH = '1em'
const HEIGHT = '1em'

export const RegularBookmarkIcon: React.FC<Props> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={HEIGHT} width={WIDTH} viewBox="0 0 384 512" {...props}>
    <path d="M0 48C0 21.5 21.5 0 48 0v441.4l130.1-92.9c8.3-6 19.6-6 27.9 0l130 92.9V48H48V0h288c26.5 0 48 21.5 48 48v440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5l-154.1 110c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"></path>
  </svg>
)

export const SolidBookmarkIcon: React.FC<Props> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={HEIGHT} width={WIDTH} viewBox="0 0 384 512" {...props}>
    <path d="M0 48v439.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400l153.7 107.6c4.1 2.9 9 4.4 14 4.4 13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path>
  </svg>
)
