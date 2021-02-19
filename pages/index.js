import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Carousel } from 'antd';
import MainLayout from '../layouts/mainLayout'
export default function Home(props) {
  return (
    <div>
      <Head>
        <title>阿古朵</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
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
      </MainLayout>
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