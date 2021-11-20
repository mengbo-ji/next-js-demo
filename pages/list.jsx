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

export async function getServerSideProps(context) {
  const data = await readFile(join(process.cwd(), 'pages', '_app.js'), 'utf-8')
  console.log('hello')
  console.log('context', context.query)
  return {
    props: {
      data
    }
  }
}