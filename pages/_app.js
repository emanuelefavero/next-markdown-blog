import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Inter } from '@next/font/google'
import '@/styles/globals.css'

const inter = Inter({
  weights: [300, 400, 500, 600, 700],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js Blog</title>
        <meta
          name='description'
          content='A static site generation Next.js Blog'
        />
        <meta name='keywords' content='next.js, blog, static, dev' />
        <meta name='author' content='Emanuele Favero' />
        <meta charSet='utf-8' />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='English' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <style jsx global>{`
        body {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Header />
      <main className='container'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
