import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Words and Phrases</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Words and Phrases" />
        <p className="description">
          Notes and Thoughts <code>const expressedAs = "code";</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
