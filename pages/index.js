import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Index page
        </title>
      </Head>
      <div>
        <Head/>
        <Link href={'/list'}>
          <a> jump to list pages </a>
        </Link>
        <img src={'/images/WechatIMG23.jpeg'}></img>
      </div>
    </>
  )
}
