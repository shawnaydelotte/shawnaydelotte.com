import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ShawnAydelotte.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <p className="description">
          Notes on processes
        </p>
      </main>

      <Footer />
    </div>
  )
}
