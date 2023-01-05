import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <span className='block pb-4'>Home Page</span>
      <a
        className='underline hover:text-blue-400'
        href='https://github.com/misikoff/next-starter-template'
      >
        Source Code
      </a>
    </>
  )
}
