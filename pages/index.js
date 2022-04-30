import Head from 'next/head'

export default function Home() {
  return (
    <div className='bg-ikkiarBright'>
      <Head>
        <title>🐒 Ikkiar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

    </div>
  )
}
