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
        <div className={styles.swiperOut}>
          <Carousel effect="fade">
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
        </div>
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