import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <h2>
          <Link href='/'>Dev Blog</Link>
        </h2>
      </div>
    </header>
  )
}
