import Head from 'next/head'
import { join } from 'path'
import { readFile } from 'fs/promises'

export default function List ({data}) {
  return (
    <>
      <Head>
        <title>
          List pages
        </title>
      </Head>
      <div>
        list pages
      </div>
      <div>
        {data}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const data = await readFile(join(process.cwd(), 'pages', '_app.js'), 'utf-8')
  return {
    props: {
      data
    }
  }
}