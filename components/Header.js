import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  return (
    <header>
      <div className='container'>
        <h2 className={router.pathname === '/' ? 'home' : 'not-home'}>
          <Link
            href='/'
            className={router.pathname === '/' ? 'home' : 'not-home'}
          >
            {'<'}
            {'>'} Blog
          </Link>
        </h2>
      </div>
    </header>
  )
}
