import React, { useRef, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Carousel } from 'antd';
import MainLayout from '../layouts/mainLayout'
import { httpGet } from '../service/http'
import urls from '../service/urls'
import NewsModule from '../components/index/news/news'

export default function Home({info, newsList, ...props}) {
  const swiperRef = useRef()
  const [cur, setCur] = useState(0)
  const preHandler = function () {
    swiperRef.current.prev()
  }
  const nextHandler = function () {
    swiperRef.current.next()
  }
  const dotHandler = function (current) {
    swiperRef.current.goTo(current)
  }
  const setChangeDot = function (from, to) {
    setCur(to)
  }
  return (
    <div>
      <Head>
        <title>阿古朵</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <main className='pages'>
          <div className={styles.swiperOut}>
            {/* 轮播方向箭头 */}
            <div className={[styles.controlContainer, 'flex-col', 'flex-ali-center', 'flex-jst-start'].join(' ')}>
              <div className={[styles.controlBar, 'flex-row', 'flex-jst-btw', 'flex-ali-center'].join(' ')}>
                <div className={['flex-row', 'flex-jst-center', 'flex-ali-center', styles.controlArrow].join(' ')} onClick={()=>preHandler()}>
                  <i className={['iconfont', 'icon-left', styles.controlIcon].join(' ')}/>
                </div>
                {/* 向右 */}
                <div className={['flex-row', 'flex-jst-center', 'flex-ali-center', styles.controlArrow, styles.controlArrowRight].join(' ')} onClick={()=>nextHandler()}>
                  <i className={['iconfont', 'icon-left', styles.controlIcon, styles.transIcon].join(' ')}/>
                </div>
              </div>
              {/* 轮播点 */}
              <div className={['full-width', 'flex-row', 'flex-jst-center', 'flex-ali-center', styles.dotContainer].join(' ')}>
                {
                  info.banners.map((item, idx) => {
                    return (
                      <div className={[styles.cusDot, cur === idx ? styles.curDot : ''].join(' ')} key={item} onClick={() => dotHandler(idx)}></div>
                    )
                  })
                }
              </div>
              {/* 新闻模块 */}
              <NewsModule packageList={info.packages.slice(0, 5)} newsList={newsList}></NewsModule>
            </div>
            <Carousel effect="slide" dots={false} autoplay={true} ref={swiperRef} beforeChange={(from, to) => setChangeDot(from, to)}>
              {info.banners.map(item => {
                return (
                  <div className={styles.swiperItem} key={item}>
                    <img src={item} alt=""/>
                  </div>
                )
              })}
            </Carousel>
          </div>
        </main>
      </MainLayout>
    </div>
  )
}

export async function getServerSideProps (context) {
  const { data } = await httpGet(urls.queryIndex)
  const newsRes = await httpGet(urls.queryNewsList)
  data.packages.forEach(item => {
    item.gameName = data.games.list.find(ele => ele.id === item.game_id).name
  })
  return {
    props: {
      info: data,
      newsList: newsRes.data.list.splice(0, 10)
    }, // will be passed to the page component as props
  }
}