import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <h2>
          <Link href='/'>
            {'<'}
            {'>'} Blog
          </Link>
        </h2>
      </div>
    </header>
  )
}
