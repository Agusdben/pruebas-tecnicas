import Link from 'next/link'

interface Props {
  breadcrumb: string[]
}

const Breadcrumb: React.FC<Props> = ({ breadcrumb }) => {
  return (
    <div className="flex gap-1">
      {
        breadcrumb.map((bread, index) => {
          const isLastBread = index + 1 !== breadcrumb.length
          return (
            <div key={bread} className='flex gap-1'>
              <Link href={'/' + breadcrumb.slice(0, index + 1).join('/')}>{bread}</Link>
              {
                isLastBread && <span>/</span>
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Breadcrumb
