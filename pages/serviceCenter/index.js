import React, { useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../../layouts/mainLayout'
import { httpGet } from '../../service/http'
import { Carousel } from 'antd';
import urls from '../../service/urls'
import styles from '../../styles/service.module.scss'
import { useRouter } from 'next/router'
export default function gameCenter({ info, ...props }) {
  // console.log(jobList)
  const router = useRouter()
  const swiperRef = useRef()
  const [cur, setCur] = useState(0) // swiper-index
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
  const toDetailHandler = type => {
    router.push({ pathname: '/serviceDetail', query: {type: type} })
  }
  const OPEN_KF_HANDLER = () => {
    window.open('http://wpa.qq.com/msgrd?v=3&uin=800183557&site=qq&menu=yes')
  }
  return (
    <div>
      <Head>
        <title>阿古朵-客服中心</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <main className='pages'>
          <div className={styles.swiperOut}>
            {/* 轮播方向箭头 */}
            <div className={[styles.controlContainer, 'flex-col', 'flex-ali-center', 'flex-jst-start'].join(' ')}>
              <div className={[styles.controlBar, 'flex-row', 'flex-jst-btw', 'flex-ali-center'].join(' ')}>
                <div className={['flex-row', 'flex-jst-center', 'flex-ali-center', styles.controlArrow].join(' ')} onClick={() => preHandler()}>
                  <i className={['iconfont', 'icon-left', styles.controlIcon].join(' ')} />
                </div>
                {/* 向右 */}
                <div className={['flex-row', 'flex-jst-center', 'flex-ali-center', styles.controlArrow, styles.controlArrowRight].join(' ')} onClick={() => nextHandler()}>
                  <i className={['iconfont', 'icon-left', styles.controlIcon, styles.transIcon].join(' ')} />
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
            </div>
            <Carousel effect="slide" dots={false} autoplay={true} ref={swiperRef} beforeChange={(from, to) => setChangeDot(from, to)}>
              {info.banners.map(item => {
                return (
                  <div className={styles.swiperItem} key={item}>
                    <img src={item} alt="" />
                  </div>
                )
              })}
            </Carousel>
          </div>
          {/* 中间部分 */}
          <div className={styles.centerOut}>
            <div className={styles.contentContainer}>
              <div className={['flex-row', 'flex-jst-start', 'flex-ali-start'].join(' ')}>
                {/* 面包屑导航 */}
                <div className={[styles.bread, 'flex-row', 'flex-jst-start', 'flex-ali-base', 'flex-1'].join(' ')}>
                  <div className='self-stretch title-prefix ma-rt-2'></div>
                  <Link href='/'>
                    <span className='title-font font-18 text-normal ma-rt-1 cursor-pointer font-bold'>首页</span>
                  </Link>
                  <span className='font-18 text-normal ma-rt-1'>{'>>'}</span>
                  <span className='font-18 text-red font-bold'>客服中心</span>
                </div>
              </div>
              {/* 正文 */}
              <div className={[styles.serviceContainer, 'flex-col', 'flex-jst-start', 'flex-ali-center'].join(' ')}>
                {/* row1 */}
                <div className={['flex-row', 'flex-jst-btw', 'flex-ali-center'].join(' ')}>
                  {/* row1-left */}
                  <div className={[styles.hoverOut, styles.concat].join(' ')} onClick={() => OPEN_KF_HANDLER()}>
                    <img src="/images/service/kf1.png" alt="" />
                    <div className={styles.hoverContainer}>
                      <img src="/images/service/kf2.png" alt="" />
                    </div>
                  </div>
                  {/* row1-right */}
                  <div className='flex-col flex-jst-btw flex-ali-center self-stretch'>
                    <div className='flex-row flex-jst-btw flex-ali-center'>
                      <div className={[styles.hoverOut, styles.topModal].join(' ')} onClick={()=>toDetailHandler(1)}>
                        <img src="/images/service/cz1.png" alt="" />
                        <div className={styles.hoverContainer}>
                          <img src="/images/service/cz2.png" alt="" />
                        </div>
                      </div>
                      <div className={[styles.hoverOut, styles.topModal, styles.topModalRight].join(' ')} onClick={()=>toDetailHandler(2)}>
                        <img src="/images/service/zh1.png" alt="" />
                        <div className={styles.hoverContainer}>
                          <img src="/images/service/zh2.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className='flex-row flex-jst-btw flex-ali-center'>
                      <div className={[styles.hoverOut, styles.topModal].join(' ')} onClick={()=>toDetailHandler(3)}>
                        <img src="/images/service/yx1.png" alt="" />
                        <div className={styles.hoverContainer}>
                          <img src="/images/service/yx2.png" alt="" />
                        </div>
                      </div>
                      <div className={[styles.hoverOut, styles.topModal, styles.topModalRight].join(' ')}>
                        <img src="/images/service/ts1.png" alt="" />
                        <div className={styles.hoverContainer}>
                          <img src="/images/service/ts2.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* rows2 */}
                <div className='flex-row flex-jst-btw flex-ali-center'>
                  <div className={[styles.hoverOut, styles.btmModal].join(' ')} onClick={()=>toDetailHandler(4)}>
                    <img src="/images/service/bd1.png" alt="" />
                    <div className={styles.hoverContainer}>
                      <img src="/images/service/bd2.png" alt="" />
                    </div>
                  </div>
                  <div className={[styles.hoverOut, styles.btmModal, styles.btmModalRight].join(' ')} onClick={()=>toDetailHandler(5)}>
                    <img src="/images/service/jb1.png" alt="" />
                    <div className={styles.hoverContainer}>
                      <img src="/images/service/jb2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </MainLayout>
    </div>
  )
}

export async function getStaticProps(context) {
  const { data } = await httpGet(urls.queryIndex)
  return {
    props: {
      info: data
    }, // will be passed to the page component as props
  }
}