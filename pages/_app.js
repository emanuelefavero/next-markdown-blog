import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js Blog</title>
        <meta name='description' content='A static Next.js Blog' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='container'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
