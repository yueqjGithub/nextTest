import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Carousel } from 'antd';
export default function Home(props) {
  const toAboutHandler = () => {
    window.location.href = '/about'
  }
  return (
    <div className={[styles.container].join(' ')}>
      <Head>
        <title>阿骨朵</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='pages'>
        <div onClick={() => toAboutHandler()}>{props.name}</div>
        <a href="/news">新闻列表</a>
        <Carousel>
          <div>
            <h3 className={styles.swiperItem}>1</h3>
          </div>
          <div>
            <h3 className={styles.swiperItem}>2</h3>
          </div>
          <div>
            <h3 className={styles.swiperItem}>3</h3>
          </div>
          <div>
            <h3 className={styles.swiperItem}>4</h3>
          </div>
        </Carousel>
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