import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home(props) {
  const toAboutHandler = () => {
    window.location.href = '/about'
  }
  return (
    <div className={[styles.container, styles.sage].join(' ')}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='pages'>
        <div onClick={() => toAboutHandler()}>{props.name}</div>
        <a href="/news">新闻列表</a>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      name: 'tonny'
    }, // will be passed to the page component as props
  }
}