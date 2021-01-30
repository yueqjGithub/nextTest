import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
export default function Detail (props) {
  console.log('详情==》',props)
  const router = useRouter()
  console.log('route=>',router)
  return (
    <div>
      <Head>
        <title>第{props.newsId}则新闻</title>
      </Head>
      <main>
        <div>
          第{router.query.id}则新闻
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps(params) {
  return {
    props: {
      newsId: params.params.id
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  // 调用外部 API 获取博文列表
  const posts = [1,2,3,4]
  // 根据博文列表生成所有需要预渲染的路径
  const paths = posts.map((post) => `/news/${post}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}