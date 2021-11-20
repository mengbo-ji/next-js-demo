export default function Post({data}) {
  return (
    <div>
      <span>{data.title}</span>
      <br/>
      <span>{data.id}</span>
    </div>
  )
}

// 返回用户可以访问到的所有路由参数
export async function getStaticPaths() {
  return {
    paths: [{params: {id: '1'}}, {params: {id: '2'}}],
    fallback: false
  }
}

// 返回路由参数所对应的具体数据
export async function getStaticProps({params}) {
  const id = params.id
  let data = null;
  switch (id) {
    case '1':
      data = {id: 1, title: 'hello'}
      break;
    case '2':
      data = {id: 2, title: 'world'}
      break;
    default:
      data = {}
      break;
  }
  return {
    props: {
      data
    }
  }
}