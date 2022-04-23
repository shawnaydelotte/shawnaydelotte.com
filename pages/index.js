import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Shawn Aydelotte</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Words and Phrases" />
        <p className="description">
          Notes on processes <code>expressedAs = "code";</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
